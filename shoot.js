var bullet,guide,range,target;
var flag; //initially: 0  ; 2 when mouse inside range
var click; //initially: 0 ; 1 when mouse clicked inside range(bullet fires)
var score=0,highScore=0;
var hit;
var scorecard;
var audio1,audio2,audio3,audio4;

var startGame = function(){
	flag=0;
	click=0;
	hit=0;

	audio1=new sound("sounds/swoosh.wav");
	audio2=new sound("sounds/gameover.flac");
	audio3=new sound("sounds/hit.wav");
	audio4=new sound("sounds/highscore.wav");
	range=new component(180,420,130,"","range");
	guide=new component(180,420,5,"","guide");
	var x=(Math.random()*800)+400;
	var y=(Math.random()*30)+520;
	target=new component2(x,y);
	bullet=new component(180,420,12,"#009999","circ");
	scorecard=new component3(150,50);
	myGameArea.start();
};


var myGameArea = {
	canvas : document.getElementById("mycanvas"),start : function(){
		this.context=this.canvas.getContext("2d");
		interval = setInterval(updateGameArea,80);
	},
	clear:function(){
		this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
	}
};


myGameArea.canvas.height=window.innerHeight;
myGameArea.canvas.width=window.innerWidth;

var updateGameArea = function(){
	
	myGameArea.clear();
	scorecard.update2();
	
	if(bullet.y>=(myGameArea.canvas.height-70) && ((bullet.x<(target.x-100))|| (bullet.x>(target.x+100)))){
				score=0;
				audio2.play();
				fadeOut("Game Over!")
				clearInterval(interval);
				startGame();
	}
	else if((bullet.x>(target.x-100))&& (bullet.x<(target.x+100)) && (bullet.y>(target.y-35))){
				hit=1;

				if((bullet.x>(target.x-25))&& (bullet.x<(target.x+25)) && (bullet.y>(target.y-6)))
					score+=20;
				else if((bullet.x>(target.x-60))&& (bullet.x<(target.x+60)) && (bullet.y>(target.y-14)))
					score+=15;
				else if((bullet.x>(target.x-80))&& (bullet.x<(target.x+80)) && (bullet.y>(target.y-25)))
					score+=10;
				else
					score+=5;
				if(score>highScore){
					audio4.play();
					highScore=score;
				}
				else{
					audio3.play();
				}
				fadeOut("Score!");
				clearInterval(interval);
				startGame();

	}
	else{
		bullet.newPos();
		range.update();
		guide.update();
		target.update1();
		bullet.update();
	}
	

};


