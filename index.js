// Code your solution in this file!
// let names = ["Antonia", "Nuru"]
// function names
// Returns the first two drivers from the array
// let returnFirstTwoDrivers=(["Antonia", "Nuru", "Mo"]) => console.log( drivers.slice(0, 2));
// 
// drivers()
//   
// returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']) => ['Antonia', 'Nuru']

let drivers=(['Antonia', 'Nuru', 'Amari', 'Mo'])
let returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

let returnLastTwoDrivers = (drivers) => drivers.slice(-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = (multiplier) => (fare) => fare * multiplier;
      
let fareDoubler = createFareMultiplier(2);

let fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = (arrayOfDrivers, driverSelector) => driverSelector(arrayOfDrivers);