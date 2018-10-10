# QuiO Coding Assignment
## Alex Kornfeld

This coding assignment was done using React.JS, bootstrapped with [create-react-app](https://github.com/facebook/create-react-app). The calendars used for submitting a date range are from the [react-datepicker](https://reactdatepicker.com/) library.

There are six buttons corresponding to the API endpoints given for this assignment. Rather than making an API call in the `componentDidMount` lifecycle hook, I opted instead to include buttons which trigger axios requests so that the data is only called when needed. Additionally the use of buttons for this purpose makes it very straightforward to mix and match one or several of the endpoints you'd like to see. I chose axios because it works well with React and has broad browser support.

When the **Get Data** button is pressed and the axios request is made, the JSON data is used to populate a table. The table is its own React component with internal state. The data is saved in two slices of the table's internal state - `_data`, and `store`. The `_data` slice of state is meant to hold all the data and never change, avoiding the need for any extra API calls in the future, while the `store` slice of state is meant to reflect any changes from the filtering process.

The user will see two calendar inputs for inputting a start date and an end date to create a date range for filtering the tables. I have conditionally allowed for only valid start and end dates to be selected. For instance, only end dates after the selected start date are allowed, and vice versa. I have also allowed for a minimum start date of one year in the past, as I believe this is consistent with the data. After the user has selected both start- and end-dates, they may submit this date range to see only the data between those dates.

To review the code, please visit the [GitHub repository](https://github.com/akorn3001/quio-assessment).
