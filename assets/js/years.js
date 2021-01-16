// credit: https://github.com/Bowser65/bowser65.xyz/blob/master/src/index.js#L32
const date = new Date();
const years = document.querySelector("#years");
years.textContent = `${
  date.getFullYear() - 2013 + (date.getMonth() >= 3 ? 1 : 0)
} years`;

const age = document.querySelector("#age");
age.textContent = `${
  date.getFullYear() -
  1998 +
  (date.getMonth() >= 3 ? (date.getDate() === 31 ? 1 : 0) : 0)
} years`;
