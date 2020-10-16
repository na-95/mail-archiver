import React, { Component } from 'react'
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';


export default class Search extends Component {

    shouldComponentUpdate(nextProps) {
        return (this.props !== nextProps);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <label>Start Date: </label>
                <input type="date" onChange={this.props.handleStartDateChange} />
                <label>End Date: </label>
                <input type="date" onChange={this.props.handleEndDateChange} />
                <button>
                </button>
            </form>
        )
    }
}
