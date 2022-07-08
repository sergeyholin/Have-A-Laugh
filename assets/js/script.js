// function myFunction() {
//     alert("Hi")
// }

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

function yomamaJoke () {
    fetch('https://api.yomomma.info/')
    .then(function(response){
      return response.json();
    }).then(function(data){
    // Getting data from API
      console.log(data)
    //   Picking data that i want
    //   console.log("joke", data.value)
    console.log("joke", data.joke)

    // Appending dynamicaly joke to card body element on HTML
      var card = document.getElementById("card-content")
      card.textContent = data.value;
    });
}
    
    


addEventListener('click')


