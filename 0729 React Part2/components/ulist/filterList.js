
import React from 'react';
import {render} from 'react-dom';

class FilterList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterString: '',
        };
        this.onChange = this.onChange.bind(this);
    }


    render() {
        return (
            <div className="filter-list">
				<form >
                    <input placeholder="Letters for filter" type="text" id="userFilterInput" ref="refFilterInput"  onChange={this.onChange}
                           value={this.state.filterString}/>
				</form>
            </div>

        )
    }
	
	onChange(event) {
        this.setState(
            {
                filterString: event.target.value
            }
        );
        this.props.makeFilteredList(event.target.value);
    }

}
export default FilterList