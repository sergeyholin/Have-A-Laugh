
// AH created a random Pun joke function
punny();
function punny() {
    fetch("https://v2.jokeapi.dev/joke/Pun?type=single")
    .then(function(response){return response.json();})
    // AH Getting data from API
    .then(function(data){console.log(data)
    // AH Choosing specific data from API 
      console.log("punny", data.joke)
    // AH Appending Pun joke to Card2 element on HTML
     var card2 = document.getElementById("card-content2")
     card2.textContent = data.joke
    });
  }

// AH Creating Save The Joke Button Function
var savedJokes = JSON.parse(localStorage.getItem("joke2")) || [];

function saveJoke () {
// AH Grab joke text
var getJoke = $("#card-content2").text()
console.log (getJoke)
// AH if the joke in the array, don't duplicate it
if (!savedJokes.includes(getJoke)) {
  // AH save joke
  savedJokes.push(getJoke);
  // append joke to the page
  // var favoriteJoke = $(`<button class="btn btn-secondary btn-block" id="city-button"><strong>${getJoke}</strong></button>`); 
  // $("#center").append(favoriteJoke);
};
// AH Put joke in local storage array
localStorage.setItem("joke2", JSON.stringify(savedJokes));
console.log(savedJokes);
}