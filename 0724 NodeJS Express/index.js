/**
 * 
 * 0724 NodeJS Express Mongoose
 * start: 	localhost:5554     			for Ajax and jQuery 
 * -		localhost:5554/sockets     	for using sockets
 * chat history stores  in database chatMongoDB ( using MongoDB)
 */

// initial const, variables etc
const express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    socketio = require('socket.io');

let app = express(),
    server = app.listen(5554),
    staticDir = __dirname + "/public/";

let io = socketio.listen(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({    extended: false  }));

// MongoDB initialize
mongoose.connect("mongodb://localhost/chatMongoDB");
let database = mongoose.connection;
database.on("error", console.error.bind(console, "connection error:"));
database.once("open", function callback () {
    console.log("Connected!")
});
var schema = mongoose.Schema({
    name: String,
    text: String,
	wasCreated: Date
});
var Message = mongoose.model('messages', schema);

// start: 	localhost:5554     			for Ajax and jQuery 
app.get('/', function (req, res) {
	res.sendfile(staticDir + 'index_jquery.html');
});

//	start: 	localhost:5554/sockets     	for using sockets
app.get('/sockets', function (req, res) {
	res.sendfile(staticDir + 'index_socket.html');
});

// GET  method for working with messages
app.get('/messages', function (req, res) {

	Message.find(function(err, msg) { 	// find list of all messages
        if (err){
			return console.error(err);
		}
        res.json(msg);
    })
});

//  POST method for working with messages
app.post('/messages', function (req, res) {
	let message = req.body;
	res.json(message);
	
	let messageForDB = new Message({
        name: message.name,
        text: message.text,
		wasCreated: message.wasCreated
    });
    messageForDB.save(function(err, messageForDB) {
        if (err){
			return console.error(err);
		}
    });
});

io.on('connection', function(socket) {
	console.log('Client connected');

	socket.on('disconnected', function() {
		console.log('Client disconnected');
	});

	socket.on('chat message', function(msg) {
		var messageForDB = new Message({
			name: msg.name,
			text: msg.text,
			wasCreated: msg.wasCreated
		});

		messageForDB.save(function(err, messageForDB) {
			if (err){
				return console.error(err);
			}
		});
		io.emit('chat message', msg);

	});

	Message.find(function(err, msg) {
        if (err){
			return console.error(err);
		}
        socket.emit('chat history', msg);
    })
});
