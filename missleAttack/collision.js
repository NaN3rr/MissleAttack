function spr_collision(){
    var pasable = true;

    if(sprite.x <= cDog.x + 40 && sprite.x >= cDog.x -40 && sprite.y <= cDog.y + 40 && sprite.y >= cDog.y -40)
    {
        if(cDog.visible == true){
            cDog.counter ++;
            cTop.getContext('2d').clearRect(0,0,canMax.x,canMax.y);
            cDog.visible =false;
        }
    }
    
    if(sprite.x <= enemy.x + 40 && sprite.x >= enemy.x -40 && sprite.y <= enemy.y + 40 && sprite.y >= enemy.y -40)
    {
        if(enemy.visible == true){
            cDog.counter = 0;
            alert("Gargle stole all your corn dogs!!!! score: " + cDog.counter +" corn dogs");
            cTop.getContext('2d').clearRect(0,0,canMax.x,canMax.y);
            enemy.visible =false;
        }
    }
    
    if(sprite.x <= enemy2.x + 40 && sprite.x >= enemy2.x -40 && sprite.y <= enemy2.y + 40 && sprite.y >= enemy2.y -40)
    {
        if(enemy2.visible == true){
            cDog.counter = 0;
            alert("Gargle stole all your corn dogs!!!! score: " + cDog.counter +" corn dogs");
            cTop.getContext('2d').clearRect(0,0,canMax.x,canMax.y);
            enemy2.visible =false;
        }
    }
}

function env_collision(x,y){
    console.log("checking enviromental collision...");
    //check all active enviromental objects
    return true;

    if(x >= envRockPillar.x && x < (envRockPillar.x + envRockPillar.imgW) 
        && y >= envRockPillar.y && y <= (envRockPillar.y+envRockPillar.imgH)){
        
        return false;
    } 

    //return true if no collision occurs
    
}