
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