// for loop syantax
for (let i = 0; i < 5; i++) {
    console.log("For Loop iteration: ", i);
}

// while loop syntax
let j = 0;
while (j < 5) {
    console.log("While Loop iteration: ", j);
    j++;
}

// do-while loop syntax
let k = 0;
do {
    console.log("Do-While Loop iteration: ", k);
    k++;
} while (k < 5);
// break statement
for (let m = 0; m < 10; m++) {
    if (m === 5) {
        console.log("Breaking the loop at iteration: ", m);
        break; // ye to h hi chodu rafa tafa kardeta h maamla
    }
    console.log("Loop iteration before break: ", m);
}

// continue statement
for (let n = 0; n < 10; n++) {
    if (n % 2 === 0) {
        console.log("Continuing at even iteration: ", n);
        continue; // ye apni maa chudwata h loop ko end kar deta h seedhe shuruaat se chalu kardeta h to jara sambhaale ke 
    }
    console.log("Odd iteration: ", n);
}