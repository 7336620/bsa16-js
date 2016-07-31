import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ItemAdd from './itemAdd.js';
import ListView from './listView.js';
import FilterList from './filterList.js';
import './css/styles.css';
import * as actions from "./actions/userListActions.js";

class UserList extends React.Component {
    constructor() {
        super();
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
		this.handleFilter = this.handleFilter.bind(this);
    }

	handleAdd(event) {
		let {users, lastID, text } = this.props.stateFromReducer;
		let name = text.trim();
		
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
	
	handleFilter( str ) { // change logics

        let newList = [];
		let sourceList = this.props.stateFromReducer.users;

        this.props.filterListAction({
            fullList: sourceList,
            filterList: newList,
			filterText: str
        }) 
	}	
	
	handleChange (event) {
        this.props.setTextValue(event.target.value);
    }

	render() {
        const { users, text, filteredUsers, filterText} = this.props.stateFromReducer;

		let itemsForView = users.filter((user) => {
			return (user.name.toUpperCase().indexOf(filterText.toUpperCase()) != -1);
		});
		return (
			<div className="user-list">
				  <ItemAdd handleAdd={this.handleAdd.bind(this)} handleChange={this.handleChange.bind(this)} text={text} />
				  <FilterList makeFilteredList={this.handleFilter} />			  
				  <hr />
				  <ListView users={itemsForView} handleDelete={ this.handleDelete.bind(this) } />
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

