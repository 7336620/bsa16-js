const initialState = {
	users: [
		{ name: 'John', uniqueID: 0 }, 
		{ name: 'Jim', uniqueID: 1 },
		{ name: 'Matt', uniqueID: 2 },
		{ name: 'Pam', uniqueID: 3 }
	],
	lastID: 3,
	text: ""
}


export default function userListReducer(state = initialState, action) {
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
            /*const {searchValue } = action;
            return Object.assign({}, state,
                {
                    searchValue: searchValue
                });*/
			const {users} = action;
            return Object.assign({}, state, {users: users});
			return state;    
        }	
        default: {
            return state;        
        }
    }
}

