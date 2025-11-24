//  lets create a function 
function helloBhai(){
    console.log("kaise ho aap")
}
helloBhai();
// loop inside function 
function loop(){
    for(let i = 0 ; i<10 ; i++ ){
        console.log(i);
    }
}
loop();
// paramerters passing
function param(number){
    
    console.log(number +10);
}
param(8);


//  calcute the average 

function ret(num1 , num2){
    average = (num1 + num2)/2;
    return average;
}
let result = ret(12 , 3);
console.log(result);

//  lets take another method to initialise the function 
let squarednumber = function (a){
    return a**2;
}
console.log(squarednumber(10));