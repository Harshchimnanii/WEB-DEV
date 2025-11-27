let obj = {
    Name : "Harsh chimnani"

};
// space h keyword ke beech me to chup chaap double inverted comma laga liyo bhsdk 
let obj1 = {
    "full name" : "chunnu goli"


};

// object ke andar ka function banana or fr call karna veryy easyy babyieee

let objf = {
    greet : function(){
        console.log("JAI SHREE KRISHNAA")
    }
};
objf.greet();
console.log(obj)
console.log(obj1)




// interview questions 
// Shallow copy copies only the top-level properties and keeps references to nested objects, while deep copy duplicates everything independently so nested objects are not shared.
// Basically shallow copy ka Matlab hai he original copy Ki Ek duplicate copy  banna dana or deep copy ka matlab hai EK string banane ke baad usko Ek variable me assign kardena : shallow copy directly related to original copy ; deep copy is just opposite
console.log(`shallow copy `)
const objj1 = { a: 1, b: { c: 2 } };

// Shallow copies
let originalobj = {
    name : "harsh",
    address : {city : "delhi"}
};
let shallowcopy = {...originalobj};
originalobj.address.city = 'agra'
console.log(shallowcopy);
console.log(`deep copy `)
const objj  = { a: 1, b: { c: 2 } };

const deepCopy = structuredClone(objj);

deepCopy.b.c = 100;
console.log(objj.b.c); // 2 (original SAFE)
