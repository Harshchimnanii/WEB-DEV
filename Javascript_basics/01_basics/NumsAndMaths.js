// // automatically defined 
// const score = 100;
// console.log(score);

// // defijed manually 
// const balance = new Number(100);
// console.log(balance);
// // isme bhi methods hote h bhaii 
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(typeof balance.toString().length);

// // tofixed is must after decimal places fixed 
// const a = balance /3;
// console.log(a.toFixed(2));

// const otherNumber = 123.8966;

// console.log(otherNumber.toPrecision(4));

// const hundreds = 100000000;
// // default is us standard 
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-IN"));

// // min max bhi hota h padh liyo 

// // -----------------------------------------------Maths-------------------------------------------------------

// console.log(Math);
// console.log(Math.abs(-13));

// console.log(Math.PI.toFixed(3));
// console.log((Math.random()*10).toFixed());

let max = 1;
let min = 0;

console.log(Math.floor(Math.random()*(max-min +1)+min));
