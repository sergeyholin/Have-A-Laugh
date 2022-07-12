yomamaJoke ();
function yomamaJoke () {
  fetch('https://salty-mountain-68764.herokuapp.com/api.yomomma.info/')
  .then(function(response){
    return response.json();
  }).then(function(data){
  
    console.log(data)
  
  console.log("joke", data.joke)
    var card4 = document.getElementById("card-content4")
    card4.textContent = data.joke;
  });
}
var savedJokes = JSON.parse(localStorage.getItem("joke4")) || [];

function saveJoke () {
// Grab joke text
var getJoke = $("#card-content4").text()
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
localStorage.setItem("joke4", JSON.stringify(savedJokes));
console.log(savedJokes);
}