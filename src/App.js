import React, { Component } from 'react';
import Search from './Components/Search'
import Attachment from './frontend_resources/files/icon_clip.svg'
import './App.css';
import Mails from './Components/Mails';
import items from './frontend_resources/files/Data'
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { DateRangePicker } from 'react-date-range';

export default class App extends Component {

  state = {
    items: [],
    filteredItems: [],
    startDate: '',
    endDate: ''
  }

  handleStartDateChange = (event) => {
    this.setState({ startDate: new Date(event.target.value) });

  }

  handleEndDateChange = (event) => {
    this.setState({ endDate: new Date(event.target.value) });

  }

  handleSubmit = (event) => {
    // alert('date: ' + this.state.startDate + ' - ' + this.state.endDate);

    this.setState({
      filteredItems: items.filter(i => {
        return (i.date.getTime() >= this.state.startDate.getTime() && i.date <= this.state.endDate.getTime())
      })
    })

    event.preventDefault();
  }

  componentDidMount() {

    this.setState({
      items
      // filteredItems: items
    })
  }

  render() {

    if (!this.state.filteredItems.length) {
      return (
        <div>
          <Search handleStartDateChange={this.handleStartDateChange} handleEndDateChange={this.handleEndDateChange} handleSubmit={this.handleSubmit} />
          <Mails>
          </Mails>
        </div >
      )
    }

    let displayedItems = this.state.filteredItems.map(i => {
      let attachmentIcon;
      if (i.attachment) {
        attachmentIcon = <img style={{ height: '20px' }} src={Attachment} alt="" />
      }

      return (
        <>

          <tr>
            <td>{i.from}</td>
            <td>{i.to}</td>
            <td>{i.subject}{attachmentIcon}</td>
            <td>{String(i.date)}</td>
          </tr>

        </>
      )
    })

    return (
      <div>
        <Search handleStartDateChange={this.handleStartDateChange} handleEndDateChange={this.handleEndDateChange} handleSubmit={this.handleSubmit} />
        <Mails number={displayedItems.length}>
          <table style={{ width: "100%" }}>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Subject</th>
              <th>Date</th>
            </tr>
            {displayedItems}
          </table>
        </Mails>
      </div >
    );
  }
}




