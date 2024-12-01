// Create a Date object for the current date and time
let date = new Date();

// Define the step and multiplier
let step = 60000; // 60,000 milliseconds = 1 minute
let k = 5;        // Move forward by 5 minutes

// Adjust the date by the specified interval
date.setTime(+date + step * k);

console.log(date); // Outputs the new date, 5 minutes ahead of the original date
