import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = { inputDate: null };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      inputDate: date,
    });

    this.props.action(date);
  }

  render() {
    let filterDate = (this.props.filterDate ? this.props.filterDate : null);

    return (
      <DatePicker
        selected={this.state.inputDate}
        onChange={this.handleChange}
        placeholderText={this.props.placeholderText}
        filterDate={ filterDate }
        dateFormat="YYYY-MM-DD"
        isClearable={true}
        />
    );
  }
}

export default Calendar;
