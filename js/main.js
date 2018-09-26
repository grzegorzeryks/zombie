
var snd = new Audio("gun.wav");
var cowSnd = new Audio("cowboy.mp3");


var zombie = document.querySelector('.zombie');
var blood = document.querySelector('.blood');

zombie.addEventListener("click", function() {
  snd.play();
  console.log("działa");
  blood.style.display = "block";
  zombie.style.animationPlayState = "paused";
  cowSnd.play();
  zombie.style.transform = "rotate(88deg)";
});
