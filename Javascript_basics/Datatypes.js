"use strict" // nothing just uses latest javascript to run the code 

// alert("just works with html and browser not on node js ");

console.log(0+12+12);

console.log("Harsh chimnani"); 

// number = 12
// String= "harsh"
// Boolean = true / false   
// Symbol = uniqueness
// BigInt = big int value
// null = standalone value
// undefined

console.log(typeof(9));
console.log(typeof(null));
console.log(typeof(undefined));

const Bignumber = 1234567890123456789012345678901234567890n;
let harsh = 'hardsh';
const harsh1 = Symbol('123');
const harsh2 = Symbol('123');
console.log(Bignumber , harsh );
console.log(typeof(harsh1));
console.log(typeof(harsh2));
let help = harsh1 == harsh2;
console.log(help);
const heroes = ["shaktimaan" , "chacha vidhyak" , "zakir khan"];
// objects defined in curly braces ;
let myobj = {
    name : "harsh",
    age : 22,
}

// define function using a variable 

const Myfirstfunc = function(){
    console.log("hello world same as is");
    
}
Myfirstfunc();

// actually returns function but said a s object function 

console.log(typeof Myfirstfunc);


// ab iska bhi dekhle 


console.log(typeof myobj);


// null is also an object bhaii 

// unique wala maamla smjha 