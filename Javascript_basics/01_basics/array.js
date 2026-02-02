// // initialization of an array 
// let arr = [1, 2, 3, 4, 5];
// // array constructor
// let brr = ['Harsh' , 1 , true];

// // print the arry 
// console.log(arr);
// console.log(brr);
// console.log(brr[0]);
// console.log(typeof(arr));
// console.log(typeof(brr));

// // push(dekho last me ek element jo doge wo pass kardega mtlb add) pop(ye bkl last wala remove kardeta h ) 
// brr.push("Chimnani");
// brr.pop("");

// // shift (remove first element) unshift (insert element at left most side)
// brr.unshift("babuu ho aap mere ");
// brr.shift();

// // slice(`take out a part of an array) 
// brr.push(20);
// brr.push(40);
// brr.push(70);
// console.log(brr.slice(2, 4)); //  uses shallowcopy not a deep copyy

// // splice (we can change(insert , remove , replace) the content of array)
// //  1 index se 2 value remove karo or waha pe kashish dalo
// console.log(brr.splice(1 , 2 , "Kashish"));
// // bina remove kare add karke dikha mc 
// console.log(brr.splice(1 ,0, "Jaish"));



// map
 let arr = [10 , 20 , 30 , 11 , 44 , 41 , 51 ];
let ansArray = arr.map((number) => {
    return number*number;
});
arr.map((number, index ) => {
    console.log(number)
    console.log(index)
});


// filter 
// let evenArray = arr.filter((number) => {
//     if (number%2 === 0 ){
//         return true;
//     } 
//     else{
//         return false;
        
//     }
// });
//  another way 
// let evenArray = arr.filter((number) => {
//     let status = number&2===0? true : false;
// });
// another way 
let evenArray = arr.filter((number) => {
    return number%2 === 0;
});



// reduce 
// sort 
// index of 
// find

console.log(evenArray);
// console.log(brr);
