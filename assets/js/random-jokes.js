//SH Made a random chuck joke function
randomJoke ();
function randomJoke () {
  fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single")
  .then(function(response){
    return response.json();
  }).then(function(data){
  // Getting data from API
    console.log(data)
  //   Picking data that i want
  //   console.log("joke", data.value)
  console.log("joke", data.joke)

  // Appending dynamicaly joke to card body element on HTML
    var card = document.getElementById("card-content1")
    card.textContent = data.joke;
  });
}

// SH made save the joke function, that saves the joke to local storage array
// =======================================================
var savedJokes = [];

function saveJoke () {
// Grab joke text
var getJoke = $("#card-content1").text()
console.log (getJoke)
// if the joke in the array, don't duplicate it
if (!savedJokes.includes(getJoke)) {
  // save joke
  savedJokes.push(getJoke);
  // append joke to the page
  var favoriteJoke = $(`<button class="btn btn-secondary btn-block" id="city-button"><strong>${getJoke}</strong></button>`); 
  $("#center").append(favoriteJoke);
};
// Put joke in local storage array
localStorage.setItem("joke", JSON.stringify(savedJokes));
console.log(savedJokes);
}


