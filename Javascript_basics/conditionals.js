let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else if (age >= 18 && age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior citizen.");
}
// switch case
let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log("Day of the week: ", dayName);
// conditional (ternary) operator
let score = 85;
let grade = (score >= 90) ? 'A' :
            (score >= 80) ? 'B' :
            (score >= 70) ? 'C' :
            (score >= 60) ? 'D' : 'F';

console.log("Your grade is: ", grade);]
// modern switch case using switch expression (ES2022 and later)
let month = 4;
let monthName = (() => {
    switch (month) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
        default: return "Invalid month";
    }
})();

console.log("Month name: ", monthName);

// nested if-else example
let number = -10;

if (number >= 0) {
    if (number === 0) {
        console.log("The number is zero.");
    } else {
        console.log("The number is positive.");
    }
} else {
    console.log("The number is negative.");
}

// example of using logical operators in conditionals
let isMember = true;
let hasCoupon = false;

if (isMember || hasCoupon) {
    console.log("You get a discount!");
} else {
    console.log("No discount available.");
}
// example of using switch with fall-through
let fruit = "banana";

switch (fruit) {
    case "apple":
    case "banana":
    case "cherry":
        console.log("This is a common fruit.");
        break;
    case "dragonfruit":
    case "kiwi":
        console.log("This is an exotic fruit.");
        break;
    default:
        console.log("Unknown fruit.");
}
