var imgArrowUp = new Image();
var imgArrowDown = new Image();
var imgArrowLeft = new Image();
var imgArrowRight = new Image();

var toggle = false;
var x = 0;
var y = 0;
var rate = 200;

//see touchArrow.js
window.onload = function(){
    imgArrowUp.src = 'img/nExit.png';
    imgArrowDown.src = 'img/sExit.png';
    imgArrowLeft.src = 'img/wExit.png';
    imgArrowRight.src = 'img/eExit.png';
}
//key board
document.onkeydown = checkKey;

function checkKey(e) {
	e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
		sprite.move('up');
	}
    else if (e.keyCode == '40') {
        // down arrow
		sprite.move('down');
    }
    else if (e.keyCode == '37') {
       // left arrow
	   sprite.move('left');
    }
    else if (e.keyCode == '39') {
       // right arrow
	  sprite.move('right');
    }
}

var arrUp = {
    x:80,y:600,ht:80,wd:80
};
var arrDown = {
	x:80,y:720,ht:80,wd:80
};
var arrLeft = {
	x:5,y:660,ht:80,wd:80
};
var arrRight = {
	x:160,y:660,ht:80,wd:80
};

c.addEventListener('mousedown',function (e)  {
    e.preventDefault();
	const rect = c.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    //console.log("x:"+x+", y:"+y);
    //see touchArrows.js
    console.log("mouse down");
    
    toggle = true;
    touchHandler(x,y);
},false);

c.addEventListener('mouseup',function (e)  {
    e.preventDefault();
	const rect = c.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    //console.log("x:"+x+", y:"+y);
    //see touchArrows.js
    console.log("mouse up");
    toggle = false;
},false);

c.addEventListener('mousemove',function (e)  {
    e.preventDefault();
	const rect = c.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    //console.log("x:"+x+", y:"+y);
    //see touchArrows.js
    console.log("mouse move");
    touchHandler(x,y);
},false);

c.addEventListener('ontouchstart',function (e)  { 
    e.preventDefault();
	const rect = c.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    //console.log("x:"  + x + ", y:" + y);
    caonsole.log("touchstart called");
    touchHandler(x,y);
	//see touchArrows.js
	toggle = true;
},false);

c.addEventListener('ontouchend',function (e)  { 
    e.preventDefault();
	const rect = c.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    //console.log("x:"  + x + ", y:" + y);
	console.log("touch end called");
	//see touchArrows.js
	toggle = false;
},false);

c.addEventListener('ontouchmove',function (e){
    e.preventDefault();
    const rect = c.getBoundingClientRect();
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
    //console.log("x:"  + x + ", y:" + y);
    console.log("touch move called");
    touchHandler(x,y);
},false);

var ctrlTimer = setInterval(touchHandler, rate);

function touchHandler(x,y){
    console.log("toggle in handler =" + toggle)
    if(toggle == true){
        if(x > arrUp.x && x < arrUp.x + arrUp.wd && y >= arrUp.y && y <= arrUp.y + arrUp.ht){
            sprite.move('up');
        }else if(x > arrDown.x && x < arrDown.x + arrDown.wd && y >= arrDown.y && y <= arrDown.y + arrDown.ht){
            sprite.move('down');
        }else if(x > arrLeft.x && x < arrLeft.x + arrLeft.wd && y >= arrLeft.y && y <= arrLeft.y + arrLeft.ht){
            sprite.move('left');
        }else if(x > arrRight.x && x < arrRight.x + arrRight.wd && y >= arrRight.y && y <= arrRight.y + arrRight.ht){
            sprite.move('right');
        }
    }
}

function arrow_draw(){
    //c = main canvas
    c.getContext('2d').drawImage(imgArrowUp,arrUp.x,arrUp.y,arrUp.wd,arrUp.ht);
    c.getContext('2d').drawImage(imgArrowDown,arrDown.x,arrDown.y,arrDown.wd,arrDown.ht);
    c.getContext('2d').drawImage(imgArrowLeft,arrLeft.x,arrLeft.y,arrLeft.wd,arrLeft.ht);
    c.getContext('2d').drawImage(imgArrowRight,arrRight.x,arrRight.y,arrRight.wd,arrRight.ht);
}