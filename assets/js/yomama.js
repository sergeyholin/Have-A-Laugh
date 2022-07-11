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
