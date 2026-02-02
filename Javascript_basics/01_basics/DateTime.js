// let myDate = new Date();
// console.log("gettime");
// console.log(myDate.getTime());
// console.log("ISO");
// console.log(myDate.toISOString());
// console.log("JSON");
// console.log(myDate.toJSON());
// console.log("localedate");
// console.log(myDate.toLocaleDateString());
// console.log("localestring");
// console.log(myDate.toLocaleString());
// console.log("date string");
// console.log(myDate.toDateString());
// console.log("normal");
// console.log(myDate);

// let myCreatedDate = new Date(2023 , 0 , 23 , 5 , 3 , 2 );
console.log("date dekhle");
// let myCreatedDate = new Date("2023-01-23");
console.log("ek or dekhle");

let myCreatedDate = new Date("01-12-2026");



console.log(myCreatedDate.toLocaleString());

// Time stamps in date 

let MytimeStamp = Date.now();
console.log(MytimeStamp);

// production level time check 
console.log(myCreatedDate.getTime());
// miliseconds to seconds *10^-3
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// month indexes from zero 
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}));
