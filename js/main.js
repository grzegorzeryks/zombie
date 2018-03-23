// to load/buffer your sound:
var snd = new Audio("gun.wav");



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
