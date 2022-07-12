// SH made generate random joke function
randomJoke();
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
      var card = document.getElementById("card-content2")
      card.textContent = data.joke;
    });
}
// =============================================================================================
// SH mage generata random number code and get random meme function
// Generate meme function
// global variables for generate random number code
var min = 0
var max = 99
// Generating random number 0-99

// getRandomIntInclusive(min, max);
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // max & min both included 
}

// Grabbing random number, and plugging it in inside pick a meme data array
var randomNumber =  getRandomIntInclusive(min, max);
console.log( getRandomIntInclusive(min, max))
// Get random meme from and API meme array
function randomMeme () {
fetch("https://api.imgflip.com/get_memes")
  .then(function(response){
    return response.json();
  }).then(function(data){
  // Getting data from API
    console.log(data)
    console.log("meme", data.data.memes[1].url)
    // var meme = data.data.meme[0].url
    $("#meme-text").append((`<p style=";margin-right: 50px font-size: 20px; color: white;"><strong style="color: white;">${data.data.memes[randomNumber].name}</strong></p>`));    
    $("#card-content1").append((`<img src=${data.data.memes[randomNumber].url} alt="Meme"></img>`));    
  })
};
// Calling the get random meme function
randomMeme ();
// SH Added local storage function for appending saved jokes.
// local storage jokes list========================================================================================
// Chuck Norris Fav Jokes 
// var display = JSON.parse(localStorage.getItem("joke1"))
// console.log(display);
// // Made a loop to append one joke at the time from local storage array
// for (var i = 0; i < display.length; i++) {
// console.log("loop started");
// console.log((display[i]));
// $("#local-storage").append((`<button class="btn btn-secondary btn-block" id="city-button"><strong>${display[i]}</strong></button>`));    
// }
// // Pun Fav Jokes
// var display = JSON.parse(localStorage.getItem("joke2"))
// console.log(display);
// // Made a loop to append one joke at the time from local storage array
// for (var i = 0; i < display.length; i++) {
// console.log("loop started");
// console.log((display[i]));
// $("#local-storage").append((`<button class="btn btn-secondary btn-block" id="city-button"><strong>${display[i]}</strong></button>`));    
// }
// // Random Fav Jokes
// var display = JSON.parse(localStorage.getItem("joke3"))
// console.log(display);
// // Made a loop to append one joke at the time from local storage array
// for (var i = 0; i < display.length; i++) {
// console.log("loop started");
// console.log((display[i]));
// $("#local-storage").append((`<button class="btn btn-secondary btn-block" id="city-button"><strong>${display[i]}</strong></button>`));    
// }
// // YoMama Fav Jokes
// var display = JSON.parse(localStorage.getItem("joke4"))
// console.log(display);
// // Made a loop to append one joke at the time from local storage array
// for (var i = 0; i < display.length; i++) {
// console.log("loop started");
// console.log((display[i]));
// $("#local-storage").append((`<button class="btn btn-secondary btn-block" id="city-button"><strong>${display[i]}</strong></button>`));    
// }

//*****MADE A NESTED LOOP TO DO THE SAME THING THAT LINES 52-89 DO BUT MORE EFFICIENTLY*****/ 
for (var i=0; i < 4;  i++) {
  var display = JSON.parse(localStorage.getItem(`joke${i+1}`))
console.log(display);
if (display) {
  for (var j = 0; j < display.length; j++) {
    console.log("loop started");
    console.log((display[j]));
    $("#local-storage").append((`<button style=";padding: 5px; margin-top: 10px; border-radius: 16px; background-color: white;"><strong>${display[j]}</strong></button>`));    
    }
}
};  
// SH added function to clear favorite jokes to index html
 function clearJokes() {
  window.localStorage.clear();
  location.reload();
  return;
 };





