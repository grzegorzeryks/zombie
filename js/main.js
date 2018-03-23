// to load/buffer your sound:
var snd = new Audio("gun.wav");
// to play the sound:


var zombie = document.querySelector('.zombie');
var blood = document.querySelector('.blood')
console.log(zombie);
console.log(blood);
zombie.addEventListener("click", function() {
  snd.play();
  console.log("działa");
  blood.style.display = "block";
  zombie.style.animationPlayState = "paused";
  snd.play();
})

// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);
