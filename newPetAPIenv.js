
// add code to read and set any environment variables with the dotenv package
require("dotenv").config();
// console.log(process.env);

// dependencies
let petfinder = require("@petfinder/petfinder-js");

// Add the code required to import the `keys.js` file and store it in a variable
const keys = require("./keys.js");
let client = new petfinder.Client(keys.petfinder);

@petfinder API Call
client.animal.search()
    .then(function (response) {
        // Do something with `response.data.animals`
        console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

let pet;
let userInput;

$("#btn").on("click", function () {
    // {{!-- home page submit button will initialize the search --}}
    // {{!-- sets our variables equal to values we get from the html form --}}
    pet = $("#drop-down").val();
    userInput = $("#text-input").val();
    console.log(select);
    console.log(userInput);
})

let secondArray = []
//  {{!-- sort through the data we get from pet finder and pull from user input--}}
//  {{!-- how to pull city or state or zip --}}
for (i = 0; i < petfinder.length; i++) {
    if (petfinder[i].type === "Cat") {
        // {{!-- take the data that matches the user's criteria and push that to a new array --}}
        // secondArray.push(petFinder[i]);
        console.log(secondArray);
    }
}

let thirdArray = []
//  {{!-- sort through the data we get from pet finder and pull from user input--}}
for (i = 0; i < secondArray.length; i++) {
    if (secondArray[i].size === "Small") {
        // {{!-- take the data that matches the user's criteria and push that to a new array --}}
        // thirdArray.push(petFinder[i]);
        console.log(thirdArray);
    }
}

let fourthArray = []
//  {{!-- sort through the data we get from pet finder and pull from user input--}}
for (i = 0; i < thirdArray.length; i++) {
    if (thirdArray[i].age === "Baby") {
        // {{!-- take the data that matches the user's criteria and push that to a new array --}}
        fourthArray.push(petFinder[i]);
    }
}

let fifthArray = []
for (i = 0; i < fourthArray.length; i++) {
    // {{!-- sort the second array and find the dogs that match both of the criteria --}}
    if (fourthArray[i].gender === "Male") {
        fifthArray.push(secondArray[i]);
    }
}

let sixthArray = []
for (i = 0; i < fifthArray.length; i++) {
    // {{!-- sort the second array and find the dogs that match both of the criteria --}}
    if (fifthArray[i].coat === "Short") {
        sicthArray.push(secondArray[i]);
    }
}

    let breed = []
    // {{!-- make a new select html element that will be a form for picking a breed --}}
    let newElement = $("<select>");
    for(i = 0; i < breed.length; i++){
        newElement.append("<option value='" + breed[i] + "'>" + breed[i] + "</option>")
    }