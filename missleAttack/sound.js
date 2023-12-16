function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
} 

const gameLoopRate = 3000;

var sndExplode1 = new sound("snd/Explosion1.mp3");
var sndExplode2 = new sound("snd/Explosion3.mp3");
var sndExplode3 = new sound("snd/Explosion5.mp3");
var sndExplode4 = new sound("snd/Explosion6.mp3");
var sndExplode5 = new sound("snd/TorpedoExplosion.mp3");
var sndEmu = new sound('snd/emu.wav');

var sndJolt = new sound("snd/bottle.mp3");

var sndLaser = new sound("snd/laser.mp3");

var sndGameLoop = new sound("snd/gameLoop.mp3");
var sndEmuTheme = new sound("snd/emuTheme.mp3");

var mainLoopToggle = true;

var lTimer = setInterval(game_loop, gameLoopRate);

function game_loop()
{
  if(mainLoopToggle){
    sndGameLoop.play();
  }
}