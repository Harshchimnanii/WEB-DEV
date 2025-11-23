// String notes full 
/* String Methods in JavaScript */

let myString = "  Hello, welcome to the world of JavaScript!  ";

// Length of the string
console.log("Length of the string:", myString.length);

// Convert to uppercase
console.log("Uppercase:", myString.toUpperCase());

// Convert to lowercase
console.log("Lowercase:", myString.toLowerCase());

// Trim whitespace from both ends
console.log("Trimmed string:", myString.trim());

// Slice a portion of the string
console.log("Sliced string (7 to 14):", myString.slice(7, 14));

// Replace a substring
console.log("Replaced string:", myString.replace("JavaScript", "JS"));

// Split the string into an array
console.log("Split string:", myString.split(","));

// Access character at a specific index
console.log("Character at index 1:", myString.charAt(1));

// Find the index of a substring
console.log("Index of 'welcome':", myString.indexOf("welcome"));

// Check if the string includes a substring
console.log("Includes 'world':", myString.includes("world"));

// Concatenate strings
let additionalString = " Let's learn together.";
console.log("Concatenated string:", myString.concat(additionalString));

// Repeat the string
console.log("Repeated string:", myString.repeat(2));

// Template literals
let name = "Alice";
let greeting = `Hello, ${name}! Welcome to JavaScript.`;
console.log("Template literal:", greeting);

// Escape characters
let quote = "He said, \"JavaScript is awesome!\"";
console.log("Escape characters:", quote);

// Raw string (using String.raw)
let rawString = String.raw`C:\Development\profile\aboutme.html`;
console.log("Raw string:", rawString);

// Unicode characters
let unicodeString = "\u00A9 2024 JavaScript Basics";
console.log("Unicode string:", unicodeString);

// String comparison
let str1 = "apple";
let str2 = "banana";
console.log("String comparison (apple < banana):", str1 < str2);

// Multi-line string using template literals
let multiLineString = `This is line one.
This is line two.
This is line three.`;
console.log("Multi-line string:", multiLineString);

// String padding
let paddedString = "5".padStart(3, "0");
console.log("Padded string:", paddedString);

// Check startsWith and endsWith
console.log("Starts with '  Hello':", myString.startsWith("  Hello"));
console.log("Ends with 'JavaScript!  ':", myString.endsWith("JavaScript!  "));

// String normalization
let accentedString = "café";
let normalizedString = accentedString.normalize("NFD");
console.log("Normalized string:", normalizedString);

// Iterating over each character in the string
for (let char of myString) {
    console.log(char);
}

// String from char codes
let charFromCode = String.fromCharCode(72, 101, 108, 108, 111);
console.log("String from char codes:", charFromCode);
