export function addUser(addUserParams) {
    const action = {
        type: 'ADD_USER',
        users: addUserParams.users,
		lastID: addUserParams.lastID,
		text: ""
    };
    return action;
}

export function deleteUser(deleteUserParams) {
    const action = {
        type: 'DELETE_USER',
        users: deleteUserParams.users,
		lastID: deleteUserParams.lastID,
		text: deleteUserParams.text
    };
    return action;
}

export function setTextValue(text) {
    return {
        type: 'SET_TEXT',
        text
    };
}


export function filterListAction(filterParams) {
    const action = {
        type: 'FILTER_LIST',
        users : filterParams.fullList,
        filteredUsers: filterParams.filterList,
		filterText: filterParams.filterText
    };
    return action;
}


