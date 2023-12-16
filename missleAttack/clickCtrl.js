var rate = 200;

cMissles.addEventListener('mousedown',function (e)  {
    e.preventDefault();
	const rect = cMissles.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    //console.log("x:"+x+", y:"+y);
    //see touchArrows.js
    //console.log("mouse down");
    clickHandler(x,y);
},false);

cMissles.addEventListener('ontouchstart',function (e)  { 
    e.preventDefault();
	const rect = cMissles.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    //console.log("x:"  + x + ", y:" + y);
    //console.log("touchstart called");
    clickHandler(x,y);
},false);

//this will handle rate of fire
//var ctrlTimer = setInterval(touchHandler, rate);

function clickHandler(x,y){

    console.log(sceneIntro.active);
    if(sceneIntro.active == true){sceneIntro.active = false; iniMain();}
    else if(sceneIntro.active == false){
        sndLaser.play();
        //check if a missle is clicked 200 X 80 ??? 
        var i = 0;

        for(i = 0;i < missle.length; i++){
            if(x >= missle[i].x + (missle[i].imgW/2) && x < missle[i].x + missle[i].imgW && y >= missle[i].y && y <= missle[i].y + missle[i].imgH){
                missleCounter++;

                //score counter
                switch(i){
                    case 0://red large
                        score += 913;
                    break;
                    case 1:
                        score += 1551;
                    break;
                    case 2:
                        score += 2375;
                    break;
                    case 3:
                        score += 3731;
                    break;
                    case 4://black
                        score += 7531;
                    break;
                }
                missle[i].reset(); 
            }
        }

        //console.log(x + ":" + y + " jolt " + jolt.x + ":" + jolt.y);
        if(x >= jolt.x && x < jolt.x + jolt.imgW && y >= jolt.y && y <= jolt.y + jolt.imgH){
            //console.log("jolt hit");
            score += 1301;
            jolt.reset();
        }

        //rocketEmu
        if(x >= rocketEmu.x && x < rocketEmu.x + rocketEmu.imgW && y >= rocketEmu.y && y <= rocketEmu.y + rocketEmu.imgH){
            //console.log("jolt hit");
            rocketEmu.hit();
            score += 7000;
        }

    }
    console.log("Missles: " + missleCounter);
    
    //put this in a game control function or something
    game_control();
}

//this will move the arm
cMissles.addEventListener('mousemove',function (e)  {
    e.preventDefault();
	const rect = cMissles.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    //console.log("x:"+x+", y:"+y);
    //console.log("mouse move");
    var quarter = (canMax.y / 4);
    if(y > quarter * 3){arm = 1;}
    else if(y > quarter * 2){arm = 2;}
    else if(y > quarter * 1){arm = 3;}
    else if(y < quarter ){arm = 4;}
    //console.log("in mouse move: " + arm);
},false);

document.onkeydown = checkKey;

var cheatToggle = false;

function checkKey(e) {
	e = e || window.event;

    if (e.keyCode == '17') {
        //cheats enabled
        if(cheatToggle == false){
            cheatToggle = true;
        }else if(cheatToggle == true){
            cheatToggle = false;
        }
        console.log("Cheat toggle:");
    }
    
    if(e.keyCode == '67' && cheatToggle == true){
        missleCounter = 200;
    }
 
}