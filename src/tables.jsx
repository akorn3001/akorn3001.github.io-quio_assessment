import React, { Component } from 'react';
import DataTable from './data_table.jsx';
import * as Util from './util.js';

class Tables extends Component {
  render() {
    const bondingTable = <DataTable endpointName="Bonding" url={Util.bondingURL}/>;
    const unbondingTable = <DataTable endpointName="Unbonding" url={Util.unbondingURL}/>;
    const injectionsTable = <DataTable endpointName="Injections" url={Util.injectionsURL}/>;
    const batteryTable = <DataTable endpointName="Battery" url={Util.batteryURL}/>;
    const temperatureTable = <DataTable endpointName="Temperature" url={Util.temperatureURL}/>;
    const errorsTable = <DataTable endpointName="Errors" url={Util.errorsURL}/>;

    return (
      <div className="tables">
        {bondingTable}
        {unbondingTable}
        {injectionsTable}
        {batteryTable}
        {temperatureTable}
        {errorsTable}
      </div>
    );
  }
}

export default Tables;
