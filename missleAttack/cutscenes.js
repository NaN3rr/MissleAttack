//cut scenes intro outro

//use cMIssiles as canvas
const introRate = 300;
const endRate = 1000;

var iTimer = setInterval(introTimer, introRate);
var enTimer = setInterval(endTimer, endRate);

function introTimer(){
    if(sceneIntro.active == true){
        sceneIntro.draw();
    }
}

function endTimer(){
    if(sceneEnd.active == true){
        sceneEnd.draw();
    }
}

var sceneIntro = {
    active:true,
    currentFrame:0,

    draw:function() {
        /*
        var imgCurrent = new Image();
        imgCurrent.src = imgIntro[currentFrame];

            //The Cyborg Emus under the command of General Dingo have taken Cheyenne, their eyes set on new Casper only a small band of rebels stands in their way
        if(currentFrame < 10){

            cMissles.getContext('2d').drawImage(imgCurrent,this.x,this.y,this.imgW,this.imgH);
        }
        */
        if(this.active == true){
            cMissles.getContext('2d').font = "30px Arial";
            cMissles.getContext('2d').fillText("Use your arm cannor to blast the missles before they reach New Casper", 10, 50); 
        
            cMissles.getContext('2d').font = "30px Arial";
            cMissles.getContext('2d').fillText("Shoot the parachutes for powerups", 300, 300);
        
            cMissles.getContext('2d').font = "30px Arial";
            cMissles.getContext('2d').fillText("Click or touch to begin...", 10, 500); 

            this.currentFrame++;
        }

    }
    
}

var sceneEnd = {
    active:false,
    currentFrame:0,

    draw:function(){
        if(this.currentFrame < 10){
            cMissles.getContext('2d').font = "50px Arial";
            cMissles.getContext('2d').fillText("YOU SAVED NEW CASPER!!!!", 300, 300);
    
            cMissles.getContext('2d').font = "30px Arial";
            cMissles.getContext('2d').fillText("General Dingo will think twice before messing with you again.",300,500);
            cMissles.getContext('2d').font = "30px Arial";
            cMissles.getContext('2d').fillText("Now enjoy a cutscene...", 300, 650); 

            this.currentFrame++;
        }else if(this.currentFrame >= 10){
            window.location.href = "./victory.html";
        }

    }
}