import React from 'react'

class ItemAdd extends React.Component {
	
  render() {
    return (<div className="item-add">
      <input id="userNameInput" ref="refNameInput" type="text" onChange={this.props.handleChange} value={this.props.text} placeholder="Enter new user name"/>
      <button onClick={this.props.handleAdd}>Add</button>
    </div>
    );
  }
}

export default ItemAdd;
