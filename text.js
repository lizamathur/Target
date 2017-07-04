function component3(x,y){
	var text1="Score : ";
	var text2="High-Score : ";
	var instruction;
	this.x=x;
	this.y=y;
	this.update2 = function(){

		//score
		txt=myGameArea.context;
		txt.font="30px Comic Sans MS";
		txt.fillStyle = "#009999";
		txt.textAlign = "center";
		txt.fillText(text1+score,this.x,this.y);

		//highscore
		hscore=myGameArea.context;
		hscore.font="30px Comic Sans MS";
		hscore.fillStyle = "#8c1aff";
		hscore.textAlign = "center";
		hscore.fillText(text2+highScore,500,50);

		//instructions
		rule=myGameArea.context;
		rule.font="25px Comic Sans MS";
		rule.fillStyle = "#5900b3";
		rule.textAlign = "left";
		instruction="Drag and position the"; 
		rule.fillText(instruction,1000,this.y);
		instruction="mouse within the range"; 
		rule.fillText(instruction,990,this.y+30);
		instruction="to adjust angle and velocity"; 
		rule.fillText(instruction,970,this.y+60);
		instruction="CLICK to fire!"; 
		rule.fillText(instruction,1060,this.y+100);

		//green ground
		ground=myGameArea.context;
		ground.fillStyle="#00cc00";
		ground.fillRect(0,myGameArea.canvas.height-180,myGameArea.canvas.width,180);

	};
};