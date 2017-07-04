function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
};


function fadeOut(text) {
var alpha = 1.0,  
interval3 = setInterval(function () {
        msg=myGameArea.context;
        msg.textAlign="center";
        msg.fillStyle = "rgba(255, 140, 26, " + alpha + ")";
        msg.font = "italic 100px Arial";
        msg.fillText(text, myGameArea.canvas.width/2, myGameArea.canvas.height/2);
        alpha = alpha - 0.05; 
        if (alpha < 0) {
        	clearInterval(interval3);
        }
    }, 50); 
};

