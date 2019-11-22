 function start(){
	
	var c=document.getElementById("myCanvas");
	var ctx=c.getContext("2d");
	var h= c.height;
	var w= c.width;

	var btn = document.getElementById('startBtn').style.display= "none" ;
	
	 
	 
	var playerX = 10;
	var playerY = 10;
	
	
	var playerW = 50;
	var playerH = 50;
	
	var up = false;
	var down = false;
	var right = false;
	var left = false;
	
	var counter = 0;
	var enemyW = 40;
	var enemyH = 50;
	var scorebord = document.getElementById("scorebord");

	var startknop = document.getElementById("startBtn");
	 
    var img = document.getElementById("orc_enemy_right");
	var img1 = document.getElementById("orc_enemy_left");
    var img2 = document.getElementById("coin");
	var img3 = document.getElementById("wizard_player_right");
	var img5 = document.getElementById("wizard_player_left");
	var img4 = document.getElementById("background");
	// Code voor oppakbare items
	
	var itemX = Math.floor(Math.random() * 750 + 1);
	var itemY = Math.floor(Math.random() * 450 + 1);
	var squareWidth = 40;
	var squareHeight = 40;
	
	// Code voor de vijand.
	
	

	 
	 
	var enemyX = Math.random() * (850 - 150) + 150;
	var enemyY = Math.floor(Math.random() * 450 + 1);
	
	// Code voor canvas. 
	function tekenen(){
	
	ctx.drawImage(img4,0,0,800,500);		
	
	ctx.strokeStyle = "black";
    ctx.strokeRect (0,0, w,h);
		
	ctx.drawImage(img3, playerX,playerY,playerW, playerH);
	
		
	ctx.drawImage(img2, itemX, itemY, 25, 25);
	
	if (playerX > enemyX){
		ctx.drawImage(img, enemyX, enemyY, enemyW, enemyH);
	}	
	
	if (playerX < enemyX) {
		ctx.drawImage(img1, enemyX, enemyY, enemyW, enemyH);
	}	
	
	}
	
	
	
function move(){
	if (up) playerY -= 10;
	if (down) playerY += 10;
	if (right) playerX +=10;
	if (left) playerX -=10;
}
		
function itemCollision(){
	
	if (
	(playerX+squareWidth-2 >= itemX && 
    playerX-squareWidth+2 <= itemX) && 
	(playerY+squareHeight-2 >= itemY && 
	playerY-squareHeight+2 <= itemY)) {
	itemX = Math.floor(Math.random() * 750 + 1);
	itemY = Math.floor(Math.random() * 450 + 1);
	counter ++;
	}
	else
	if (counter == 10) {
	counter ++;
	
  	location.href = 'FlappyBird/index.html';
	}
	
	scorebord = document.getElementById("scorebord").innerHTML = "Score: " + counter;
}

function vangen(){
	if (playerX < enemyX){
		enemyX -= 7;
	}
	if (
	playerY > enemyY){
		enemyY += 7;
	}
	if (playerY < enemyY){
		enemyY -= 7;
	}
	if (playerX > enemyX){
		enemyX += 7;
	}
}

function enemyCollision() {
	if (enemyX+enemyW-8 >= playerX && 
    
		 enemyX-enemyW+8 <= playerX && 
	
		enemyY+enemyH-8 >= playerY && 
	
		 enemyY-enemyH+8 <= playerY)
	{
		alert("- Game Over -");
		location.reload();
	}		
}
	
	
	
function borderCollision() {
	
	if (playerX + playerW > w) {
		playerX = w - playerW;
	}
	if (playerX < 0) {
		playerX = 0;
	}	
	if (playerY + playerH > h) {
		playerY = h - playerH;
	}
	if (playerY < 0) {
		playerY = 0;
	}
}
	

	
window.addEventListener('keydown',function(e){
	if (e.keyCode==38){
		up=true;}
	if (e.keyCode==40){
		down=true;}
	if (e.keyCode==39){
		right=true;}
	if (e.keyCode==37){
		left=true;}

							})
window.addEventListener('keyup',function(e){
	if (e.keyCode==38){
		up=false;}
	if (e.keyCode==40){
		down=false;}
	if (e.keyCode==39){
		right=false;}
	if (e.keyCode==37){
		left=false;}
	 if(e.keyCode == 192){
		counter = 9;
	}
							})
	setInterval	(vangen, 30);
	setInterval(move, 30);
	setInterval(tekenen, 3);
	setInterval(itemCollision, 30);
	setInterval(enemyCollision, 30);
	setInterval(borderCollision, 30);
}

//var x = Math.floor(Math.random() * 780 +1);
//var y = Math.floor(Math.random() * 48	0 +1);