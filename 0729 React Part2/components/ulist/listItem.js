import React from 'react'

class ListItem extends React.Component {

  render() {
    return (
		<div className="list-item">
		  <span>{this.props.name}  </span>
		  <button data-id={this.props.id} onClick={ this.props.handleDelete }>Delete</button>
		</div>
    );
  }
}

export default ListItem;

