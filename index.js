// dependencies
var petfinder = require("@petfinder/petfinder-js");

// adds results from to a TXT file
let fs = require("fs");

// var client = new petfinder.Client (keys.petfinder);
let client = new petfinder.Client({apiKey: "EGc3gxBpk6teIzgELn3yobiuQzodUCyieJnvK8zEj633m76rEz", secret: "TJgV9Um001Akix3x70lcFD1eO3gIQX7aAIBlIMUB"});
// var client = new petfinder.Client({apiKey: "my-api-key", secret: "my-api-secret"}); 


client.animal.search()
    .then(function (response) {
        // Do something with `response.data.animals`
        console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

    client.animal.search({type: "Dog"})
    .then(function (response) {
      // Do something with resp.data.animals
      console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

    client.animal.search({size: "Medium"})
    .then(function (response) {
      // Do something with resp.data.animals
      console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

    client.animal.search({age: "Baby"})
    .then(function (response) {
      // Do something with resp.data.animals
      console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

    client.animal.search({gender: "Male"})
    .then(function (response) {
      // Do something with resp.data.animals
      console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

    client.animal.search({coat: "Any"})
    .then(function (response) {
      // Do something with resp.data.animals
      console.log(response.data)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error);
    });

    // client.animal.search({tags: "Affectionate"})
    // .then(function (response) {
    //   // Do something with resp.data.animals
    //   console.log(response.data)
    // })
    // .catch(function (error) {
    //     // Handle the error
    //     console.log(error);
    // });

//     client.animalData.breeds('dog')
//   .then(resp => {
//     // Do something with resp.data.breeds
//   });
   