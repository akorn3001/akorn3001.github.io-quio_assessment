import axios from 'axios';

const bondingURL = "http://assignment.quio.com/bonding";
const unbondingURL = "http://assignment.quio.com/unbonding";
const injectionsURL = "http://assignment.quio.com/injections";
const batteryURL = "http://assignment.quio.com/battery";
const temperatureURL = "http://assignment.quio.com/temperature";
const errorsURL = "http://assignment.quio.com/errors";

export const getJSON = (url) => {
  axios.get(url)
  .then(res => console.log(res.data));
};
