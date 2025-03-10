// Code your solution in this file!
// let names = ["Antonia", "Nuru"]
// function names
// Returns the first two drivers from the array
// let returnFirstTwoDrivers=(["Antonia", "Nuru", "Mo"]) => console.log( drivers.slice(0, 2));
// 
// drivers()
//   
// returnFirstTwoDrivers(['Antonia', 'Nuru', 'Amari', 'Mo']) => ['Antonia', 'Nuru']
//   
 // Returns the last two drivers from the array
//   function returnLastTwoDrivers(drivers) {
    // return drivers.slice(-2);
//   }
//   
 // Array containing the two functions above
//   const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
//   
 // Returns a function that multiplies a fare by a given multiplier
//   function createFareMultiplier(multiplier) {
    // return function(fare) {
    //   return fare * multiplier;
    // };
//   }
//   
 // Doubles the fare
//   const fareDoubler = createFareMultiplier(2);
//   
 // Triples the fare
//   const fareTripler = createFareMultiplier(3);
//   
 // Selects different drivers based on the provided function
//   function selectDifferentDrivers(arrayOfDrivers, driverSelector) {
    // return driverSelector(arrayOfDrivers);
//   }
// 


let drivers=(['Antonia', 'Nuru', 'Amari', 'Mo'])
let returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);

let returnLastTwoDrivers = (drivers) => drivers.slice(-2);

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier = (multiplier) => (fare) => fare * multiplier;
      
let fareDoubler = createFareMultiplier(2);

let fareTripler = createFareMultiplier(3);

let selectDifferentDrivers = (arrayOfDrivers, driverSelector) => driverSelector(arrayOfDrivers);