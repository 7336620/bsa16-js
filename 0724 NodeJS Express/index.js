/**
 * 
 * 0724 NodeJS Express Mongoose
 * start: 	localhost:5554     			for Ajax and jQuery 
 * -		localhost:5554/sockets     	for using sockets
 * chat history stores  in database chatMongoDB ( using MongoDB)
 */

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
var schema = mongoose.Schema({
    name: String,
    text: String,
	wasCreated: Date
});
var Message = mongoose.model('messages', schema);

var messages = [];

app.get('/', function (req, res) {
	res.sendfile(staticDir + 'index_jquery.html');
});

app.get('/sockets', function (req, res) {
	res.sendfile(staticDir + 'index_socket.html');
});

app.get('/messages', function (req, res) {
	res.json(messages);
});

app.post('/messages', function (req, res) {
	let message = req.body;
	messages.push(message);
	res.json(message);
	
	let messageForDB = new Message({
        name: message.name,
        text: message.text,
		wasCreated: message.wasCreated
    });

    messageForDB.save(function(err, messageForDB) {
        if (err) return console.error(err);
    });
});

io.on('connection', function(socket) {
	console.log('Client connected');

	socket.on('disconnected', function() {
		console.log('Client disconnected');
	});

	socket.on('chat message', function(msg) {
		messages.push(msg);
		var messageForDB = new Message({
			name: msg.name,
			text: msg.text,
			wasCreated: msg.wasCreated
		});

		messageForDB.save(function(err, messageForDB) {
			if (err) return console.error(err);
		});
		io.emit('chat message', msg);
	});

	socket.emit('chat history', messages);
});
