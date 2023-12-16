//canvas sprite move and animate library

var frameRate=600;
imgCornDog= new Image();
imgEnemy = new Image();
imgBackground = new Image();
imgEnemy2 = new Image();

imgSprite.src = "img/demo.png";
imgCornDog.src = "img/cornDog.png";
imgEnemy.src = "img/gargleScary.svg";
imgBackground.src = "img/moon.jpeg";
imgEnemy2.src = "img/gargleScary.svg";

window.onload = function(){
  	//console.log("in on body load");
  	imgSprite.src = "img/demo.png";
  	imgCornDog.src = "img/cornDog.png";
  	imgEnemy.src = "img/gargleScary.svg";
  	imgBackground.src = "img/moon.jpeg";
	imgEnemy2.src = "img/gargleScary.svg";

  	cDog.draw(); 
	enemy.draw();
	enemy2.draw();
	background.draw();
}
const canMax = {x:1280,y:800};
var c = document.getElementById("mainCanvas");
var cBack = document.getElementById("bottomCanvas");
var cTop = document.getElementById("topCanvas");
var cBackground = document.getElementById("backgroundCanvas");

document.getElementById("mainCanvas").style.zIndex = "2"; 
document.getElementById("bottomCanvas").style.zIndex = "1"; 
document.getElementById("topCanvas").style.zIndex = "1"; 
document.getElementById("backgroundCanvas").style.zIndex = "-1"; 






