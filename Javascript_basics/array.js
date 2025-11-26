let arr = [1 , 2, 3,4  ,45,66 ,54,5555 ,64,]
for (let i = 0 ; i<arr.length ; i++){
    console.log(arr[i]);
}
//  initialization of an array 

let arr1 = new Array(1 , "hello" , true);
console.log(typeof(arr1));
console.log(typeof(arr));


//  push pop 

arr.push("bablu");

arr.pop("");






// shift (rm first element ) unshift (insert element at left most side ) 
arr.shift();
arr.unshift("babuu ho aap mere ");


// slice split

console.log(arr.slice(0 , 3));
// map
// filter 
// reduce 
// sort 
//index of 
//find
console.log(arr);