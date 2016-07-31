import React from 'react';
import ListItem from './listItem';

// 3 variants of fast search

//  working without filter 
class ListView extends React.Component {  
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

/*
// with filter , but not worked too (https://habrahabr.ru/post/229629/)
class ListView extends React.Component {

	render() {
        var libraries = this.props.users,
            searchString = (this.props.text || '').trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }
		
		return  <div className="list-view">
					{ libraries.map(function(user) {
					return <ListItem key={user.uniqueID} id={user.uniqueID} name={user.name} handleDelete={ this.props.handleDelete } />;
						}, this) }
				</div>
    }
}
	*/
/*
// with filter , but not worked
class ListView extends React.Component {

  render() {
	const searchStr = (this.props.text || '').trim();
	if(searchStr.length > 0){
		return (
			<div className="list-view">
				{this.props.users.map(function(user){
						return( ((user.name).indexOf(searchStr) === 0) ? 
							<ListItem key={user.uniqueID} id={user.uniqueID} name={user.name} handleDelete={ this.props.handleDelete } />
							: <hr />);
				},this )}			
			</div> 
		);		
	}else{
		return (
            <div className="list-view">
				{this.props.users.map(function(user) {
					return( <ListItem key={user.uniqueID} id={user.uniqueID} name={user.name} handleDelete={ this.props.handleDelete } />); 
				}, this )}
			</div>
		);		
	}
  }
}
 */
 
 


export default ListView;

