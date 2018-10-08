import React, { Component } from 'react';
import DataTable from './data_table.jsx';
import * as Util from './util.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DataTable endpointName="Bonding" url={Util.bondingURL}/>
        <DataTable endpointName="Unbonding" url={Util.unbondingURL}/>
        <DataTable endpointName="Injections" url={Util.injectionsURL}/>
        <DataTable endpointName="Battery" url={Util.batteryURL}/>
        <DataTable endpointName="Temperature" url={Util.temperatureURL}/>
        <DataTable endpointName="Errors" url={Util.errorsURL}/>
      </div>
    );
  }
}

export default App;
