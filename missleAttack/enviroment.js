var background = {
	xView:300,
	yView:300,
	winMaxX:600,
	winMaxY:600,
	img: "moon.jpeg",
	
	pageReq:function(dir){
		switch(dir)
		{
			case 'up':
				//is there another page available
                //move character to bottom of new area ie sprite.y = 540
                //currently character wraps
				sprite.y = canMax.y - sprite.imgH;
			break;
			case 'down':
				sprite.y = 0;
			break;
			case 'left':
				sprite.x = canMax.x - sprite.imgW;
			break;
			case 'right':
				sprite.x = 0;
			break;
		}
	},
	
	draw:function(dir) { 		
		cBackground.getContext('2d').drawImage(imgBackground,0,0,canMax.x,canMax.y);
	}
};
//scenes
var desert1 = {
    name:"desert",
    src:"image",
    objs:[]
};


//enviroment objects
//Rock pillar !animated
var envRockPillar = {
    name:"rock pillar",
	x:500,
    y:500,
	src: "imgRockPillar",
	imgW:150,
	imgH:200,
	active:false,
    
    //action:function(){}

};

function draw(pCan)
{
    //replace with draw pcan background????
    var imgBack = document.getElementById(activePCan.id);
    
    c.getContext('2d').drawImage(imgBack,0,0,600,600);
    //console.log("this should make the background: " + imgBack.id);
    
    var i;   
    
    var x;
    var y;
    var h;
    var w;
 
    for(i = 0; i < pCan.objs.length;i += 1){
        if(pCan.objs[i].active == true){
            var imgDraw = new Image();
            imgDraw = document.getElementById(pCan.objs[i].id);            
            x = pCan.objs[i].x;
            y = pCan.objs[i].y;
            h = pCan.objs[i].ht;
            w = pCan.objs[i].wd;
                   
           /* ENABLE FOR DEBUGGING 
	c.getContext('2d').fillText(pCan.objs[i].name,pCan.objs[i].x,pCan.objs[i].y);
            c.getContext('2d').beginPath();
            c.getContext('2d').rect(pCan.objs[i].x,pCan.objs[i].y,pCan.objs[i].wd,pCan.objs[i].ht);
            c.getContext('2d').stroke();
           */            

			drawBuf(imgDraw,x,y,w,h);  
        }     
        
    }     
}