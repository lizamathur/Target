function component2(x,y){

	this.x=x;
	this.y=y;
	this.update1 = function(){
		t1=myGameArea.context;
		t2=myGameArea.context;
		t3=myGameArea.context;
		t4=myGameArea.context;

		t1.beginPath();
		t1.ellipse(this.x,this.y,100,35,0,0,Math.PI*2);
		t1.fillStyle = "#cc0000";
		t1.fill();
		t1.strokeStyle="black";
		t1.stroke();

		t2.beginPath();
		t2.ellipse(this.x,this.y,80,25,0,0,Math.PI*2);
		t2.fillStyle = "#ffffff";
		t2.fill();
		t2.strokeStyle="black";
		t2.stroke();

		t3.beginPath();
		t3.ellipse(this.x,this.y,60,14,0,0,Math.PI*2);
		t3.fillStyle = "#cc0000";
		t3.fill();
		t3.strokeStyle="black";
		t3.stroke();

		t4.beginPath();
		t4.ellipse(this.x,this.y,25,6,0,0,Math.PI*2);
		t4.fillStyle = "#ffffff";
		t4.fill();
		t4.strokeStyle="black";
		t4.stroke();
	};
};