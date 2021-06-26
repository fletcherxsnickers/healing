var e = document.getElementById("banner");
var x = 0;

function moveBanner() {
  x--;
  e.style.marginLeft = x + "px";

}

setInterval(moveBanner, 60);