console.log("primitive" , "Non Primitive Types");
console.log("Stack : primitive" , "Heap : non primitive");

// ******************************************************************************************************************************




let MyYoutubeName = "Crazysnippet.com";

let UserOne = {
    name: "Janu Kutta",
    upi_id: "chimnaniharsh4@okaxis",
    email: "chimnaniharsh4@gmail.com"
}

let UserTwo = UserOne;
console.log(UserOne);
UserTwo.email="JaishreeKrishna@gmail.com";
console.log(UserOne);
console.log(UserOne.email);
console.log(UserTwo.email);

