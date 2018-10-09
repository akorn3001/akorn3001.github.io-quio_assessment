import React, { Component } from 'react';
import Tables from './tables.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="preamble">
          <h1>QuiO Coding Assignment</h1>
          <h2>Alex Kornfeld</h2>
          <p>
            This coding assignment was done using React.JS, bootstrapped
            with <a href="https://github.com/facebook/create-react-app">create-react-app</a>.
            The calendars used for submitting a date range are from
            the <a href="https://reactdatepicker.com/">react-datepicker</a> library.
            <br />
            <br />
            Below are six buttons corresponding to
            the <a href="http://assignment.quio.com/">API endpoints given for this assignment</a>.
            Rather than making an API call in the componentDidMount lifecycle hook,
            I opted instead to include buttons which trigger axios requests so that
            the data is only called when needed. Additionally the use of buttons
            for this purpose makes it very straightforward to mix and match one
            or several of the endpoints you'd like to see. I chose axios because
            it works well with React and has broad browser support.
            <br />
            <br />
            When the <strong>Get Data</strong> button is pressed and the axios
            request is made, the JSON data is used to populate a table. The table
            is its own React component with internal state. The data is saved in
            two slices of the table's internal state - <strong>_data</strong>,
            and <strong>store</strong>. The <strong>_data</strong> slice of state
            is meant to hold all the data and never change, avoiding the need for
            any extra API calls in the future, while the <strong>store</strong> slice
            of state is meant to reflect any changes from the filtering process.
            <br />
            <br />
            The user will see two calendar inputs for inputting a start date and
            an end date to create a date range for filtering the tables.
            I have conditionally allowed for only valid start and end dates to
            be selected. For instance, only end dates after the selected start
            date are allowed, and vice versa. After the user has selected both
            start and end dates, they may submit this date range to see only the
            data between those dates.
            <br />
            <br />
            To review the code, please visit the <a href="https://github.com/akorn3001/quio-assessment">GitHub for this repository</a>.
          </p>
        </div>
        <Tables />
      </div>
    );
  }
}

export default App;
