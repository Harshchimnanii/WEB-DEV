// initialisation
// var age = 22;
// console.log("Age:", age);

// fuctional scoped 

function solve(){
    var age = 53;
    console.log("Age inside function:", age);
}
 
solve();

console.log("Age outside function:", age);

// Global scoped 
var age = 20;
if(true){
    console.log("Age inside if block:", age);
}
// block scoped nhi hai 