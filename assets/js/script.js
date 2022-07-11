// SH made generate random joke function
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
// Generate meme function
function randomNumber() {
  
}
var min = 0
var max = 99
getRandomIntInclusive(min, max);
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included 
}
console.log("random number",getRandomIntInclusive(min, max))
var randombNumber = console.log("random number",getRandomIntInclusive(min, max))


fetch("https://api.imgflip.com/get_memes")
    .then(function(response){
      return response.json();
    }).then(function(data){
    // Getting data from API
      console.log(data)
      console.log("meme", data.data.memes[1].url)
      // var meme = data.data.meme[0].url
      $("#meme").append((`<p style="margin-left: 250px; font-size: 25px"><strong>${data.data.memes[randombNumber].name}</strong></p>`));    
      $("#meme").append((`<img src=${data.data.memes[randombNumber].url} alt="Meme"></img>`));    
    
    })



// SH Added local storage function for appending saved jokes.
// local storage function========================================================================================
// Declaring global variable for local storage array
var display = JSON.parse(localStorage.getItem("joke"))
console.log(display);
// Made a loop to append one joke at the time from local storage array
for (var i = 0; i < display.length; i++) {
console.log("loop started");
console.log((display[i]));
$("#local-storage").append((`<button class="btn btn-secondary btn-block" id="city-button"><strong>${display[i]}</strong></button>`));    
}
//SS created a random YoMama joke function
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
    
    





