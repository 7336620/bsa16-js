import React from 'react';

class ItemAdd extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddUser = this.handleAddUser.bind(this);
  }

  handleAddUser() {
    let input = document.getElementById("userNameInput") ;
    let name = input.value.trim();
    if(name) {
      this.props.addUser(name);
      input.value = '';
    }
  }
  
  render() {
    return (<div className="item-add">
      <input id="userNameInput" type="text" placeholder="Enter new user name"/>
      <button onClick={this.handleAddUser}>Add</button>
    </div>
    );
  }
}

export default ItemAdd;