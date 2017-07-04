//object to store mouse x and y position
var mouse = {  
	x:undefined,
	y:undefined
};

var mousex,mousey,dist;
/*mousex: instantaneous x position of mouse
  mousey: instantaneous y position of mouse
  distx: instantaneous x distance b/w mouse and bullet
  distx: instantaneous y distance b/w mouse and bullet
  dist: instantaneous exact distance b/w mouse and bullet*/

addEventListener("mousemove",function(event){
		mousex=event.x;
		mousey=event.y;
		var distx=bullet.x-mousex;
		var disty=mousey-bullet.y;
		dist=Math.sqrt(distx*distx+disty*disty);
		if(dist<=120 && click!=1){
			ctx=myGameArea.context;
			ctx.beginPath();
			ctx.arc(mousex,mousey,8,0,Math.PI * 2);
			ctx.fillStyle = "#4d4d4d";
			ctx.fill();
			flag=2;
		}
});


var angle,v,vx,vy,gravity;
/*bx : initial x position of bullet when fired
  bx : initial y position of bullet when fired
  dx : x distance b/w mouse and bullet when fired
  dy : y distance b/w mouse and bullet when fired
   v : actual distance b/w mouse and bullet when fired
angle : angle at which the bullet is fired
  vx : delta change of bullet along x after being fired
  vy : delta change of bullet along y after being fired*/

addEventListener("click",function(event){
	if(flag==2 && click!=1){
		mouse.x=event.x;
		mouse.y=event.y;
		var bx=bullet.x;
		var by=bullet.y;
		var dx=bx-mouse.x;
		var dy=mouse.y-by;
		gravity=10;
		v=Math.sqrt(dx*dx+dy*dy)/10;
		angle=Math.atan2(dx,dy); //in RADIANS
		vx=v*Math.sin(angle);
		vy=v*Math.cos(angle);
		angle=angle*180/Math.PI; //in DEGREES
		click=1;
		audio1.play();
	}

});