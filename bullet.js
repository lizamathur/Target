function component(x,y,radius,color,type){
	this.x=x;
	this.y=y;
	this.radius=radius;
	this.color=color;
	this.type=type;

	this.update = function(){

		if(this.type=="circ"){
			ctx1=myGameArea.context;
			ctx1.beginPath();
			ctx1.arc(this.x,this.y,this.radius,0,Math.PI * 2);
			ctx1.fillStyle = this.color;
			ctx1.fill();
		}
		else if(this.type=="guide" && dist<=120){
			ctx2=myGameArea.context;
			ctx2.beginPath();
			ctx2.moveTo(this.x,this.y);
			ctx2.lineTo(mousex,mousey);
			if(click!=1){
				ctx2.strokeStyle="#999966";
				ctx2.stroke();
			}
			
		}
		else
		{
			ctx3=myGameArea.context;
			ctx3.beginPath();
			ctx3.arc(this.x,this.y,this.radius,0,Math.PI * 2);
			ctx3.strokeStyle="#ff6666";
			ctx3.stroke();
		}

	};


	this.newPos = function(){
		if(click==1){


			if(angle<=90 && angle>=-90){
				
				this.x+=7*vx;
				this.y-=gravity+6*vy;
				vy-=1;
				
			}					
			else
			{
				this.x+=2*vx;
				this.y+=gravity-vy;
				vy-=1;
				
			}
			
		}
		
	};
};
