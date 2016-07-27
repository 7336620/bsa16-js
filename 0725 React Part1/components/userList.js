import React from 'react';
import ItemAdd from './itemAdd';
import ListView from './listView';
import './css/styles.css';

class UserList extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			users: [
				{ name: 'John', uniqueID: 0 }, 
				{ name: 'Jim', uniqueID: 1 },
				{ name: 'Matt', uniqueID: 2 },
				{ name: 'Pam', uniqueID: 3 }
			],
			lastID: 3
		};
		
		this.addUser = this.addUser.bind(this);
		this.deleteUser = this.deleteUser.bind(this);
	}

	addUser(name) {
		if(name !== ''){
			this.state.users.push({ 
				name: name ,
				uniqueID: ++this.state.lastID
			});
			
			this.setState({
				users: this.state.users 
			});
		}
	}


	deleteUser(id) {
		let users = this.state.users.filter((user) => {
			return user.uniqueID !== id;
		});

		this.setState({
			users: users
		});

	}
	
    shouldComponentUpdate(nextProps, nextState) {
		if (( nextState.users.length == 0) && (this.state.users.length ==0 ) ){
            return false;
        }
        return true;		
    }
	
	render() {
		return (
			<div className="user-list">
				  <ItemAdd addUser={ this.addUser } />
				  <hr />
				  <ListView users={ this.state.users } deleteUser={ this.deleteUser } />
			</div>
		);
	}
}

export default UserList;