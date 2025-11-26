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

console.log(`shallow copy `)
const objj1 = { a: 1, b: { c: 2 } };

// Shallow copies
const copy1 = Object.assign({}, obj);
const copy2 = { ...objj1 }; // spread operator

copy1.b.c = 100;
console.log(obj.b.c); // 100 (changes original!)


console.log(`deep copy `)
const objj  = { a: 1, b: { c: 2 } };

const deepCopy = structuredClone(objj);

deepCopy.b.c = 100;
console.log(objj.b.c); // 2 (original SAFE)
