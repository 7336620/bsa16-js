const initialState = {
	users: [
		{ name: 'John', uniqueID: 0 }, 
		{ name: 'Jim', uniqueID: 1 },
		{ name: 'Matt', uniqueID: 2 },
		{ name: 'Pam', uniqueID: 3 }
	],
	lastID: 3,
	text: "",
	filterText: "",
	filteredUsers:[]
}


export default function userListReducer(state = initialState, action) {
	console.log("userListReducer");
	console.log(action);
    switch (action.type) {
	    case 'ADD_USER': {
            const {users, lastID} = action;
            return Object.assign({}, state, {users: users, lastID: state.lastID + 1 });
        }

        case 'DELETE_USER': {
			const {users} = action;
            return Object.assign({}, state, {users: users});
        }
		
        case 'SET_TEXT':
            return Object.assign({}, state, {
                text: action.text
        });
			
        case 'FILTER_LIST': {
            const { users ,filteredUsers, filterText} = action;
            return Object.assign({}, state, {
                users,
                filteredUsers,
				filterText
            })   
        }	
		
        default: {
            return state;        
        }
    }
}

