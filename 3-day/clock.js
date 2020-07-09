const hours = parseInt(prompt("Enter the hours"));
const minutes = parseInt(prompt("Enter the minutes"));

const seconds = hours * 3600 + minutes * 60;
console.log(
  `The time in seconds for ${hours} h and ${minutes} min, is ${seconds} sec`
);
