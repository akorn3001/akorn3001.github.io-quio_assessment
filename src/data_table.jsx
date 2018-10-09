import React, { Component } from 'react';
import axios from 'axios';
import Calendar from './calendar';
import moment from 'moment';


class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _data: [],
      store: [],
      isTableOpen: false,
      startDate: null,
      endDate: null
    };

    this.getData = this.getData.bind(this);
    this.resetData = this.resetData.bind(this);
    this.handleStartDate = this.handleStartDate.bind(this);
    this.handleEndDate = this.handleEndDate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleStartDate(date) {
    this.setState({ startDate: date });
  }

  handleEndDate(date) {
    this.setState({ endDate: date });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      store: this.state._data.filter((item) => {
        return moment(item.date) >= this.state.startDate &&
        moment(item.date) <= this.state.endDate;
      })
    });
  }

  getData(e) {
    e.preventDefault();
    axios.get(this.props.url)
    .then(response => {
      this.setState({
        _data: response.data,
        store: response.data,
        isTableOpen: true
      });
    }).catch(error => alert(error));
  }

  resetData(e) {
    e.preventDefault();
    this.setState({
      store: this.state._data
     });
  }

  render() {
    let table;
    let button;
    let submitButton;
    let calendars;
    let endDateMinimum;
    let startDateMaximum;

    // Conditional handling of valid start and end dates for the calendars
    if (this.state.startDate && !this.state.endDate) {
      endDateMinimum = this.state.startDate;
    } else if (!this.state.startDate && this.state.endDate) {
      startDateMaximum = this.state.endDate;
    } else if (!this.state.startDate && !this.state.endDate) {
      endDateMinimum = moment().subtract(365, 'd');
      startDateMaximum = moment().subtract(1, 'd');
    }

    if (this.state.startDate && this.state.endDate) {
      submitButton = <button onClick={this.handleSubmit}>Submit Date Range</button>;
    } else {
      submitButton = <button disabled>Submit Date Range</button>;
    }

    const getDataButton = <button className="getOrHideData" onClick={this.getData}>Get Data</button>;
    const resetDataButton = <button className="getOrResetData" onClick={this.resetData}>Reset Table</button>;

    if (this.state.isTableOpen) {
      table =
      <table>
        <tbody>
          <tr>
            <th id="date-label">Date</th>
            <th id="value-label">Value</th>
          </tr>
        </tbody>
        <tbody>{this.state.store.map(function(item, key) {
            return (
              <tr key={key}>
                <td>{item.date}</td>
                <td>{item.value}</td>
              </tr>
            );
          })}</tbody>
      </table>;

      button = resetDataButton;

      calendars =
      <div>
        <span>Start Date: </span>
        <Calendar
          action={this.handleStartDate}
          filterDate={(date) => { return date >= moment().subtract(366, 'd') && date < startDateMaximum; }}
          placeholderText="Pick Start Date"
           />
         <br />
        <span>End Date: </span>
        <Calendar
          action={this.handleEndDate}
          filterDate={(date) => { return date > endDateMinimum && date <= moment(); }}
          placeholderText="Pick End Date"
          />
        <br />
        { submitButton }
      </div>;
    } else {
      table = null;
      calendars = null;
      button = getDataButton;
    }

    return (
      <div>
        <h3 className="table-name">{this.props.endpointName}</h3>
        { calendars }
        { button }
        { table }
      </div>
    );
  }
}

export default DataTable;
