import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ItemAdd from './itemAdd';
import ListView from './listView';
import './css/styles.css';
import * as actions from "./actions/userListActions.js";

class UserList extends React.Component {

	handleAdd(event) {
		let {users, lastID, text } = this.props.stateFromReducer;
		let name = text.trim();
		// let input = document.getElementById("userNameInput") ;
		// let name = input.value.trim();
		
		if(name !== ''){
			lastID++;
			let user = {
				name: name,
				uniqueID: lastID
			};
			users = [...users, user];
			this.props.addUser({
				users,
				lastID
			});     
		}
	}


	handleDelete(event) {
	    const id = +event.target.dataset.id;
		let users = this.props.stateFromReducer.users.filter((user) => {
			return user.uniqueID !== id;
		});
		let { lastID, text } = this.props.stateFromReducer;
		this.props.deleteUser({
			users,
			lastID,
			text
		}); 
	}
	
	handleChange (event) {
        this.props.setTextValue(event.target.value);
    }

	render() {
		const text = this.props.stateFromReducer.text;
		const users = this.props.stateFromReducer.users;
		
		return (
			<div className="user-list">
				  <ItemAdd handleAdd={this.handleAdd.bind(this)} handleChange={this.handleChange.bind(this)} text={text} />
				  <hr />
				  <ListView users={users} handleDelete={ this.handleDelete.bind(this) } />
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	
    return bindActionCreators(actions, dispatch);
}

function mapStateToProps(state) {
	
    return {
        stateFromReducer: state
    };
}
const UserListConnected = connect(mapStateToProps, mapDispatchToProps)(UserList);
export default UserListConnected;

