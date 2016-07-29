import React from 'react';
import ListItem from './listItem';

class ListView extends React.Component {

  /*render() {
	const searchStr = this.props.text.trim() || '';
    return (
		(searchStr.length > 0)?
			<div className="list-view">
				{this.props.users.map(function(user) {
					((user.name).indexOf(searchStr) === 0) ? 
						return( <ListItem key={user.uniqueID} id={user.uniqueID} name={user.name} handleDelete={ this.props.handleDelete } />)
						: return( <hr />)		;
				} )}			
			</div> :
            <div className="list-view">
				{this.props.users.map(function(user) {
					return( <ListItem key={user.uniqueID} id={user.uniqueID} name={user.name} handleDelete={ this.props.handleDelete } />); 
				} )}
			</div>
    );
  }*/
  
    render() {
    return (
		<div className="list-view">{
			this.props.users.map(function(user) {
                return <ListItem key={user.uniqueID} id={user.uniqueID} name={user.name} handleDelete={ this.props.handleDelete } />;
            }, this)
		}
		</div>
    );
  }
}


export default ListView;

