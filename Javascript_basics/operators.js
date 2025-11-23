// ternary operator frequently asked inrterview question 
let status = " success";
let message = status = "success" ? " mission successful" : " maa chud gayi ";
console.log(message)

// operators are of following types
// 1. Arithmetic operators
// 2. Assignment operators
// 3. Comparison operators
// 4. Logical operators
// 5. Bitwise operators
// 6. String operators
// 7. Conditional (ternary) operators
// 8. Type operators
// 9. Unary operators
// 10. Relational operators
// 11. Spread operators
// 12. Destructuring operators
// 13. etc

// example of arithmetic operators
let a = 10;
let b = 5;
console.log(" a + b = ", a + b);
console.log(" a - b = ", a - b);
console.log(" a * b = ", a * b);
console.log(" a / b = ", a / b);
console.log(" a % b = ", a % b);
console.log(" a ** b = ", a ** b); // exponentiation

// example of assignment operators or shorthand operators
let c = 20;
c += 5; // c = c + 5
console.log(" c after += 5 : ", c);
c -= 3; // c = c - 3
console.log(" c after -= 3 : ", c);
c *= 2; // c = c * 2
console.log(" c after *= 2 : ", c);
c /= 4; // c = c / 4
console.log(" c after /= 4 : ", c);

// example of comparison operators
let x = 15;
let y = 10;
console.log(" x > y : ", x > y);
console.log(" x < y : ", x < y);
console.log(" x >= y : ", x >= y);
console.log(" x <= y : ", x <= y);
console.log(" x == y : ", x == y);
console.log(" x != y : ", x != y);
console.log(" x === y : ", x === y);
console.log(" x !== y : ", x !== y);

// example of bitwise operators
let m = 5;  // binary: 0101
let n = 3;  // binary: 0011
console.log(" m & n : ", m & n); // AND
console.log(" m | n : ", m | n); // OR
console.log(" m ^ n : ", m ^ n); // XOR
console.log(" ~m : ", ~m);       // NOT
console.log(" m << 1 : ", m << 1); // Left Shift
console.log(" m >> 1 : ", m >> 1); // Right Shift

// example of logical operators
let p = true;
let q = false;
console.log(" p && q : ", p && q);
console.log(" p || q : ", p || q);
console.log(" !p : ", !p);

// example of string operators
let str1 = "Hello, ";
let str2 = "World!";
let str3 = str1 + str2;
console.log(" Concatenated String : ", str3);

// example of type operators
console.log(" Type of str3 : ", typeof(str3));
console.log(" Type of a : ", typeof(a));
console.log(" Type of p : ", typeof(p));

// example of unary operators
let num = 10;
console.log(" Unary +num : ", +num);
console.log(" Unary -num : ", -num);
console.log(" Increment ++num : ", ++num);
console.log(" Decrement --num : ", --num);
console.log(" Decrement num-- : ", num--);
console.log(" After num++ : ", num++);

// example of relational operators
let arr = [1, 2, 3];
console.log(" arr instanceof Array : ", arr instanceof Array);
console.log(" str3 instanceof String : ", str3 instanceof String);

// example of spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = [...arr1, ...arr2];
console.log(" Combined Array using Spread Operator : ", combinedArr);

// example of destructuring operator
let person = { name: "John", age: 30 };
let { name, age } = person;
console.log(" Name : ", name);
console.log(" Age : ", age);