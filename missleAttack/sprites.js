const redRate=100;
const blueRate=50;
const blackRate=20;
const explodeRate = 100;
const wheelRate = 100;
const powRate = 75;
const emuRate = 100;

var rTimer = setInterval(redTimer, redRate);
var bTimer = setInterval(blueTimer, blueRate);
var xTimer = setInterval(blackTimer, blackRate);
var exTimer = setInterval(explodeTimer, explodeRate);
var wTimer = setInterval(wheelTimer, wheelRate);
var pTimer = setInterval(powUpTimer, powRate);
var emTimer = setInterval(emuTimer, emuRate);

function emuTimer(){
	if(rocketEmu.active == true){rocketEmu.draw();}
}

function redTimer(){
	if(missle[0].active == true){missle[0].draw();}
	if(missle[1].active == true){missle[1].draw();}
}

function blueTimer(){
	if(missle[2].active == true){missle[2].draw();}
	if(missle[3].active == true){missle[3].draw();}
}

function blackTimer(){
	if(missle[4].active == true){missle[4].draw();}
	//if(missle[3].active == true){missle[3].draw();}
}

function powUpTimer(){
	if(jolt.active == true){
		jolt.draw();
	}
}

function wheelTimer(){
 	wheel.draw();
}

var wheel = {
	currentFrame:0,

	draw:function()
	{
		var imgCurrent = new Image();
		imgCurrent.src = imgWheel[this.currentFrame]; 
 		if (this.currentFrame > 3){this.currentFrame = 0;}
 		cTop.getContext('2d').drawImage(imgCurrent,(canMax.x -250),(canMax.y - 50),50,50);
 		cTop.getContext('2d').drawImage(imgCurrent,(canMax.x - 100),(canMax.y -50),50,50);
		this.currentFrame++;
		//canMax.x - 250),(canMax.y - 150),40,40
	}
};

function explodeTimer(){
	cBack.getContext('2d').clearRect(0,0,canMax.x,canMax.y);
	background.draw();
}

function explode(x,y,w){
	cBack.getContext('2d').beginPath();
	cBack.getContext('2d').globalAlpha = 0.2; ///transparency
	cBack.getContext('2d').arc(x + (w/2), y, w/4, 0, 2 * Math.PI, false);
    cBack.getContext('2d').fillStyle = 'yellow';
	cBack.getContext('2d').fill();
	cBack.getContext('2d').closePath();
	cBack.getContext('2d').beginPath();
	cBack.getContext('2d').arc(x + (w/2), y, w/5, 0, 2 * Math.PI, false);
    cBack.getContext('2d').fillStyle = 'red';
	cBack.getContext('2d').fill();
	cBack.getContext('2d').closePath();
	cBack.getContext('2d').beginPath();
	cBack.getContext('2d').arc(x + (w/2), y, w/6, 0, 2 * Math.PI, false);
    cBack.getContext('2d').fillStyle = 'white';
	cBack.getContext('2d').fill();
	cBack.getContext('2d').closePath();
    //cBack.getContext('2d').lineWidth = 5;
    //cBack.getContext('2d').strokeStyle = '#003300';
    //cBack.getContext('2d').stroke();
}

/////////////////////////////////
function rndHt()
{	
	// 0- to lowest	
    return Math.floor(Math.random() * (canMax.y - 300)) + 40;
}

function rndWd()
{	
	// 0- to lowest	
    return Math.floor(Math.random() * (canMax.x - 300)) + 40;
}

var missle = [
	///missle[0] red missle 1
	{
		x:-466, //start off screen
		y:rndHt(), ///this will be assigned by rndHt
	
		//anim specific
		img: "",
		imgW:466,
		imgH:80,
		frames:6,
		currentFrame:0,
		active:false,
    
		draw:function() { 
			var imgCurrent = new Image();
			if (this.img != null){
				if(this.active == true){
					var xMod = 10;
			
					cMissles.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
					this.x += xMod;
					if(this.currentFrame > 3){this.currentFrame = 0}
					imgCurrent.src = imgRedMissle[this.currentFrame];
					cMissles.getContext('2d').drawImage(imgCurrent,this.x,this.y,this.imgW,this.imgH);
					this.currentFrame++;
					collision(this.x);
				}
			}
		},

		reset:function() {
			sndExplode1.play(); 
			explode(this.x,this.y,this.imgW);
			cMissles.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);//replace with explosion
            this.y = rndHt();
            this.x = -466;
		}
	},
	//missle[1] red missle 2
	{
		x:-466, //start off screen
		y:rndHt(), ///this will be assigned by rndHt
	
		//anim specific
		img: "",
		imgW:233,
		imgH:40,
		frames:6,
		currentFrame:0,
		active:false,
    
		draw:function(dir) { 
			var imgCurrent = new Image();
			if (this.img != null){
				if(this.active == true){
					var xMod = 10;
			
					cMissles.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
					this.x += xMod;
					if(this.currentFrame > 3){this.currentFrame = 0}
					imgCurrent.src = imgRedMissle[this.currentFrame];
					cMissles.getContext('2d').drawImage(imgCurrent,this.x,this.y,this.imgW,this.imgH);
					this.currentFrame++;
					collision(this.x);
				}
			}
		},

		reset:function() {
			sndExplode2.play();
			explode(this.x,this.y,this.imgW);
			cMissles.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);//replace with explosion
            this.y = rndHt();
            this.x = -466;
		}
	},

	//missle[2] blue missle 1
	{
		x:-466, //start off screen
		y:rndHt(), ///this will be assigned by rndHt
	
		//anim specific
		img: "",
		imgW:300,
		imgH:60,
		frames:6,
		currentFrame:0,
		active:false,
    
		draw:function(dir) { 
			var imgCurrent = new Image();
			if (this.img != null){
				if(this.active == true){
					var xMod = 10;
			
					cMissles2.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
					this.x += xMod;
			
					if(this.currentFrame > 3){this.currentFrame = 0}
					imgCurrent.src = imgBlueMissle[this.currentFrame];
					cMissles2.getContext('2d').drawImage(imgCurrent,this.x,this.y,this.imgW,this.imgH);
					//this.currentFrame = (this.currentFrame + 1) % this.frames;	//think of how to stop animation
					this.currentFrame++;
					collision(this.x);
				}
			}
		},

		reset:function() {
			sndExplode3.play();
			explode(this.x,this.y,this.imgW);
			cMissles2.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);//replace with explosion
            this.y = rndHt();
            this.x = -466;
		}
	},
	//missle[3] blue missle 2
	{
		x:-466, //start off screen
		y:rndHt(), ///this will be assigned by rndHt

		//anim specific
		img: "",
		imgW:200,
		imgH:30,
		frames:6,
		currentFrame:0,
		active:false,

		draw:function(dir) { 
			var imgCurrent = new Image();
			if (this.img != null){
				if(this.active == true){
					var xMod = 10;
		
					cMissles2.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
					this.x += xMod;
		
					if(this.currentFrame > 3){this.currentFrame = 0}
					imgCurrent.src = imgBlueMissle[this.currentFrame];
					cMissles2.getContext('2d').drawImage(imgCurrent,this.x,this.y,this.imgW,this.imgH);
					//this.currentFrame = (this.currentFrame + 1) % this.frames;	//think of how to stop animation
					this.currentFrame++;
					collision(this.x);
				}
			}
		},

		reset:function() {
			sndExplode4.play();
			explode(this.x,this.y,this.imgW);
			cMissles2.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);//replace with explosion
            this.y = rndHt();
            this.x = -466;
		}
	},

	//missle[4] black missle 1
	{
		x:-466, //start off screen
		y:rndHt(), ///this will be assigned by rndHt

		//anim specific
		img: "",
		imgW:200,
		imgH:30,
		frames:6,
		currentFrame:0,
		active:false,

		draw:function(dir) { 
			var imgCurrent = new Image();
			if (this.img != null){
				if(this.active == true){
					var xMod = 10;
		
					cMissles2.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
					this.x += xMod;
		
					if(this.currentFrame > 3){this.currentFrame = 0}
					imgCurrent.src = imgBlackMissle[this.currentFrame];
					cMissles2.getContext('2d').drawImage(imgCurrent,this.x,this.y,this.imgW,this.imgH);
					//this.currentFrame = (this.currentFrame + 1) % this.frames;	//think of how to stop animation
					this.currentFrame++;
					collision(this.x);
				}
			}
		},

		reset:function() {
			sndExplode5.play();
			explode(this.x,this.y,this.imgW);
			cMissles2.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);//replace with explosion
            this.y = rndHt();
            this.x = -466;
		}
	}

]

var rocketEmu = {
	x:-466, //start off screen
	y:rndHt(), ///this will be assigned by rndHt

	//anim specific
	img: "",
	imgW:200,
	imgH:200,
	frames:4,
	currentFrame:0,
	active:false,
	dir:'up',
	health:10,

	draw:function() { 
		var imgCurrent = new Image();
		if (this.img != null){
			if(this.active == true){
				var xMod = 5;
				var yMod = 5;

				cMissles.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
				if(this.health >0){
					this.x += xMod;
					//canMax.y - 300 
					if(this.dir == 'up'){	
						this.y += yMod;
						if(this.y >= (canMax.y -300)){this.dir = 'down';}
					}else if(this.dir == 'down'){
						this.y -= yMod;
						if(this.y <= 40){this.dir = 'up';}
					}

					if(this.currentFrame > 3){this.currentFrame = 0}
					imgCurrent.src = imgRocketEmu[this.currentFrame];
					cMissles.getContext('2d').drawImage(imgCurrent,this.x,this.y,this.imgW,this.imgH);
					this.currentFrame++;
					collision(this.x);
				}
			}
		}
	},
	hit:function() {
		this.health -= 1;
		if(this.health > 0){
			sndEmu.play();
		}else if(this.health <= 0){
			for(n=0;n < missle.length;n++){
				missle[n].reset();
				missle[n].active = false;
			} 
			this.active = false;
			explode(this.x,this.y,this.imgW);
			sceneEnd.active = true;
		}
	}
}

////////POWER UPS
var jolt = {
	x:rndWd(), 
	y:-100, //start off screen

	//anim specific
	img: "",
	imgW:99,
	imgH:160,

	active:false,

	draw:function(dir) { 
		var imgCurrent = new Image();
		if (this.img != null){
			if(this.active == true){
				var yMod = 10;
	
				cMissles2.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);
				this.y += yMod;
	
				if(this.currentFrame > 3){this.currentFrame = 0}
				imgCurrent.src = imgJolt;
				cMissles2.getContext('2d').drawImage(imgCurrent,this.x,this.y,this.imgW,this.imgH);
				//collision(this.x);
				if(this.y > (canMax.y + this.imgH)){
					this.reset();
				}
			}
		}
	},

	reset:function() {
		var n = 0;
		sndJolt.play();
		explode(this.x,this.y,this.imgW);
		cMissles2.getContext('2d').clearRect(this.x,this.y,this.imgW,this.imgH);//replace with explosion
		this.x = rndWd();
		this.y = -100;
		for(n=0;n < missle.length;n++){
            missle[n].reset();
		} 
		this.active = false;
		missleCounter++;
	}
}

var background = {
	draw:function(){
		var imgBack = new Image();
		imgBack.src = imgBackground;
		var imgS = new Image();
		imgS.src = imgSky;
		var imgCar = new Image();
		switch(arm)
		{
			case 1:
				imgCar.src = imgKCar[0];
			break;
			case 2:
				imgCar.src = imgKCar[1];
			break;
			case 3:
				imgCar.src = imgKCar[2];
			break;	
			case 4:
				imgCar.src = imgKCar[3];
			break;
		}
		//console.log("arm:" + arm);

		cMissles.getContext('2d').clearRect(10,600,600,800);
		cMissles.getContext('2d').font = "14px Courier New";
        cMissles.getContext('2d').fillText("MISSLES: " + missleCounter, 10, 630); 
		cMissles.getContext('2d').font = "30px Courier New";
        cMissles.getContext('2d').fillText("SCORE: " + score, 10, 650); 

		cBackground.getContext('2d').drawImage(imgS,0,0,canMax.x,canMax.y);
		cBackground.getContext('2d').drawImage(imgBack,0,0,canMax.x,canMax.y);
		cBackground.getContext('2d').drawImage(imgCar,(canMax.x-300),(canMax.y - 200),300,230);
	}	
}

function collision(x){
	if(x > (canMax.x - 300)){
		mainLoopToggle = false;
		sndGameLoop.stop();
		sndEmuTheme.play();
		//console.log("you looose")
		window.location.href = "./gameOver.html";
		
		for(var i=0;i < missle.length;i++ )
		{
			missle[i].active = false;
		}

		cMissles.getContext('2d').clearRect(0,0,canMax.x,canMax.y);
		cMissles2.getContext('2d').clearRect(0,0,canMax.x,canMax.y);
		cMissles3.getContext('2d').clearRect(0,0,canMax.x,canMax.y);
		cBack.getContext('2d').clearRect(0,0,canMax.x,canMax.y);
		cBackground.getContext('2d').clearRect(0,0,canMax.x,canMax.y);
		cTop.getContext('2d').clearRect(0,0,canMax.x,canMax.y);
	}
}

