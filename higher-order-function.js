'use strict';

// function repeat(fn, n) {
//   for (let i = 0; i <= n; i++){
//     fn;
//   }
// }

// function hello(){
//   console.log('Hello world');
// }

// function goodbye(){
//   console.log('Goodbye world');
// }

// repeat(hello(), 5);
// repeat(goodbye(), 5);

// function filter(arr, fn) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++){
//     let currentElement = arr[i];
//     if (fn(currentElement) === true){
//       newArray.push(currentElement);
//     }
//   }
//   //return newArray
//   return newArray;
// }

// // DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// // First we setup an array of strings we plan to filter:
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// // We use your `filter` function here, capturing a new array into `filteredNames`
// // comprised of names that only begin with 'R'
// const filteredNames = filter(myNames, function(name) {
//   // This is known as a "predicate function" - it's a function that 
//   // only returns a boolean
//   return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']
// // <---- DO NOT EDIT BETWEEN THESE LINES


// function hazardWarningCreator(typeOfWarning) {
//   let warningCounter = 0;
//   return function(location) {
//     warningCounter++;
//     console.log(`Danger there is a ${typeOfWarning} hazard at ${location}!`)
//     console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
//   }
// }

// const rocksWarning = hazardWarningCreator('Rocks on the Road')
// const floodWarning = hazardWarningCreator('Theres a flood coming!');
// const tornadoWarning = hazardWarningCreator('There are flying houses everywhere!')

// rocksWarning('Main St and Pacific Ave');
// // => DANGER There is a Rocks on the Road hazard at Main St and Pacific Ave
// // => The Rocks on the Road hazard has triggered 1 time(s) today!

// floodWarning('Centinela Ave and Olympic Blvd');
// // => DANGER There is a Rocks on the Road hazard at Centinela Ave and Olympic Blvd
// // => The Rocks on the Road hazard has triggered 2 time(s) today!

// // Invoke the other hazard creators you instantiated, too

let turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// **** filter
// turtleMovements = turtleMovements.filter(movement => movement[0] >= 0 && movement[1] >= 0);
// console.log(turtleMovements);

// **** MAP ***
// const map1 = turtleMovements.map(movement => movement[0]+ movement[1]);
// console.log(map1);

// **** forEACH
// const map2 = turtleMovements.forEach(function(movement){
//   console.log(movement[0] + movement[1])
// });

//console.log(map2);

// turtleMovements.filter(function(){
//     for (let i = 0; i <= turtleMovements.length -1; i++){
//       if (turtleMovements[i][0] < 0 || turtleMovements[i][1] < 0){
//         turtleMovements.splice(i);
//       }
//     }
//     console.log(turtleMovements);
//   });

// turtleMovements.filter(function(movement) {
//       movement[0] <=0 && movement[1] <= 0;
//       console.log(turtleMovements);
//     })

  // forEach, filter, map
// let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
// movements = movements.filter(movement => movement[0] >= 0 && movement[1] >= 0);

// distances = movements.map(movement => movement[0] + movement[1]);

// distances.forEach(distance => {
//     console.log(distance);
// });

