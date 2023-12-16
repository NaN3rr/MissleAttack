
function game_control(){
    //wave 1 100

    if(missleCounter< 100){
        if(missleCounter >= 10){missle[1].active = missle[2].active = true;}
        if(missleCounter >= 20){missle[1].active = missle[2].active = missle[3].active = true;}
        if(missleCounter >= 40 && missleCounter < 55){missle[1].active = missle[2].active = missle[3].active = missle[4].active = true;}
        if(missleCounter >= 55){missle[4].active = false;}

        if(missleCounter == 25){jolt.active=true;}
        if(missleCounter == 35){jolt.active=true;}
        if(missleCounter == 45){jolt.active=true;}
        if(missleCounter == 55){jolt.active=true;}
        if(missleCounter == 65){jolt.active=true;}
        if(missleCounter == 75){jolt.active=true;}
        if(missleCounter == 85){jolt.active=true;}
        if(missleCounter == 95){jolt.active=true;}
    }

    if(missleCounter > 100 && missleCounter < 175){
        if(missleCounter >= 100 && missleCounter < 130){missle[0].active = missle[4].active= false; missle[1].active = missle[2].active = missle[3].active = true;}
        if(missleCounter == 115){jolt.active=true;}
        if(missleCounter == 130){jolt.active=true;}

        if(missleCounter >= 130 && missleCounter < 160){missle[4].active = false; missle[0].active = missle[1].active = missle[2].active = missle[3].active = true;}
        if(missleCounter == 130){jolt.active=true;}

        if(missleCounter >= 160 && missleCounter < 200){missle[4].active = missle[0].active = missle[1].active = missle[2].active = missle[3].active = true;}
        if(missleCounter == 174){jolt.active=true;}
    }

    if(missleCounter >= 200){
        missle[3].active = false;
        rocketEmu.active = true;
        //window.location.href = "./victory.html";
    }
}