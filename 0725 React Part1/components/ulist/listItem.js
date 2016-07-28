import React from 'react';

class ListItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleDelUser = this.handleDelUser.bind(this);
  }

  handleDelUser() {
    this.props.deleteUser(this.props.id);
  }

  render() {
    return (
		<div className="list-item">
		  <span>{this.props.name}</span>
		  <button onClick={ this.handleDelUser }>Delete</button>
		</div>
    );
  }
}

export default ListItem;