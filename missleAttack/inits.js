//canvas sprite move and animate library

var imgBackground = "img/newCasper.png";
var imgSky = "img/background.png"

var imgRedMissle = ["img/missle1.png", "img/missle2.png","img/missle3.png","img/missle4.png"];
var imgBlueMissle = ["img/bluemissle1.png", "img/bluemissle2.png","img/bluemissle3.png","img/bluemissle4.png"];
var imgBlackMissle = ["img/blackmissle1.png", "img/blackmissle2.png","img/blackmissle3.png","img/blackmissle4.png"];
var imgWheel = ["img/wheel1.png","img/wheel2.png","img/wheel3.png"];
var imgKCar = ["img/kCar1.png","img/kCar2.png","img/kCar3.png","img/kCar4.png"];
var imgRocketEmu = ['img/rocketEmu1.png','img/rocketEmu2.png','img/rocketEmu3.png','img/rocketEmu4.png'];

var imgJolt = "img/jolt.png";

//var imgIntro = [];

var missleCounter = 0;
var score = 0;

var arm = 1;

window.onload = function(){
	sceneIntro.draw();
	
}

const canMax = {x:1200,y:700};
var cMissles = document.getElementById("mainCanvas");
var cMissles2 = document.getElementById("missleCanvas2");
var cMissles3 = document.getElementById("missleCanvas3");
var cBack = document.getElementById("bottomCanvas");
var cBackground = document.getElementById("backgroundCanvas");
var cTop = document.getElementById("topCanvas");

document.getElementById("topCanvas").style.zIndex = "0"; 
document.getElementById("mainCanvas").style.zIndex = "4"; 
document.getElementById("missleCanvas2").style.zIndex = "3"; 
document.getElementById("missleCanvas3").style.zIndex = "2"; 
document.getElementById("bottomCanvas").style.zIndex = "1"; 
document.getElementById("backgroundCanvas").style.zIndex = "-1"; 

function iniMain(){
	//console.log("in iniMain");
	cMissles.getContext('2d').clearRect(0,0,canMax.x,canMax.y);
    missle[0].active = true;
    missle[2].active = true;
	missle[0].draw(); 
	missle[2].draw(); 
	background.draw();	 
}




