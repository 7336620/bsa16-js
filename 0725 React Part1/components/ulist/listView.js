import React from 'react';
import ListItem from './listItem';

class ListView extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
		<div className="list-view">{
			this.props.users.map(function(user) {
                return <ListItem key={user.uniqueID} id={user.uniqueID} name={user.name} deleteUser={ this.props.deleteUser } />;
            }, this)
		}
		</div>
    );
  }
}

export default ListView;