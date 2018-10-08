import React, { Component } from 'react';
import axios from 'axios';

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios.get(this.props.url)
    .then(response => {
      this.setState({ data: response.data });
    });
  }

  render() {
    let table =
    <table>
      <tr>
        <th>Date</th>
        <th>Value</th>
      </tr>
      <tbody>{this.state.data.map(function(item, key) {
          return (
            <tr key={key}>
              <td>{item.date}</td>
              <td>{item.value}</td>
            </tr>
          );
        })}</tbody>
    </table>;

    return (
      <div>
        <h3>{this.props.endpointName}</h3>
        {table}
      </div>
    );
  }
}

export default DataTable;
