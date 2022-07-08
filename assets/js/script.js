
// SH Made a random chuck joke function
function chuckJoke () {
fetch("https://api.chucknorris.io/jokes/random")
.then(function(response){
  return response.json();
}).then(function(data){
// Getting data from API
  console.log(data)
//   Picking data that i want
  console.log("joke", data.value)
// Appending dynamicaly joke to card body element on HTML
  var card = document.getElementById("card-content1")
  card.textContent = data.value;
});
}

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



// AH created a random Pun joke function
function punny() {
  fetch("https://v2.jokeapi.dev/joke/Pun?type=single")
  .then(function(response){return response.json();})
  // Getting data from API
  .then(function(data){console.log(data)
  // Choosing specific data from API 
    console.log("punny", data.joke)
  // Appending Pun joke to Card2 element on HTML
   var card2 = document.getElementById("card-content2")
   card2.textContent = data.joke
  });
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
    
    





