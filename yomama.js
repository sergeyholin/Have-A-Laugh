function yomamaJoke () {
  fetch('https://api.yomomma.info/')
  .then(function(response){
    return response.json();
  }).then(function(data){
  
    console.log(data)
  
  console.log("joke", data.joke)
    var card = document.getElementById("card-content1")
    card.textContent = data.joke;
  });
}