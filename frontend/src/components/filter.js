import React, { Component} from 'react';
import '../assets/css/filter.css';


class FilterSort extends Component {
    constructor(props) {
        super(props)
        this.state = {
          sortValue:''
        }
        this.onChange = this.onChange.bind(this);
    }


    onChange(event)
    {
        this.setState({sortValue: event.target.value});  
        this.props.handleSort(event.target.value);
    }
  

    render() {
        return (
            <div>
               <div className="filter-cont">
               <h3>Sort Pokemon</h3>
                    <select onChange={this.onChange} value={this.state.sortValue}>
                        <option value="">...</option>
                        <option value="id">By Id</option>
                        <option value="name">By Name</option>
                        <option value="level">By Level</option>
                    </select>
               </div>
            </div>
        );
    }
}

export default FilterSort;