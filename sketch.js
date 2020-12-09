var player,playeridle,playerkick,playerwalk,playerpunch,blocking,crouch;
var ground,groundimg;
var invisibleground;
var backgroundimg;
var gameState = "serve";
var enemy,enemyidle,enemykick,enemypunch,enemycrouch;

function preload(){
  playeridle=loadAnimation("IMAGES/walk b (2).png","IMAGES/walk b (3).png")
  playerkick=loadAnimation("IMAGES/Air Kick 1 (2).png","IMAGES/Air Kick 1 (3).png","IMAGES/Air Kick 1 (4).png",
  "IMAGES/Air Kick 1 (5).png","IMAGES/Air Kick 1 (6).png")
 backgroundimg= loadImage("IMAGES/fighting2.jpg");
 playerwalk= loadAnimation("IMAGES/walk b (2).png","IMAGES/walk b (3).png","IMAGES/walk b (4).png",
 "IMAGES/walk b (5).png","IMAGES/walk b (6).png");
 playerpunch=loadAnimation("IMAGES/Ap2 (5).png","IMAGES/Ap3 (2).png","IMAGES/Ap3 (3).png","IMAGES/Ap3 (4).png",
 "IMAGES/Ap3 (5).png","IMAGES/Ap3 (6).png");
 blocking=loadAnimation("IMAGES/blocking.png","IMAGES/blocking (2).png","IMAGES/blocking (3).png","IMAGES/blocking (4).png");
 crouch=loadAnimation("IMAGES/crouch S P (2).png","IMAGES/crouch S P (3).png","IMAGES/crouch S P (4).png",
 "IMAGES/crouch S P (5).png","IMAGES/crouch S P (6).png");
enemyidle= loadAnimation("IMAGES/enemywalk.png","IMAGES/enemyrun.png","IMAGES/enemywalk2.png");
enemykick=loadAnimation("IMAGES/Air Kick 1 (2)1.png","IMAGES/Air Kick 1 (3)2.png","IMAGES/Air Kick 1 (4)3.png",
  "IMAGES/Air Kick 1 (5)4.png","IMAGES/Air Kick 1 (6)5.png");
  enemypunch=loadAnimation("IMAGES/Ap2 (5)1.png","IMAGES/Ap3 (2)2.png","IMAGES/Ap3 (3)3.png","IMAGES/Ap3 (4)4.png","IMAGES/Ap3 (5)5.png","IMAGES/Ap3 (6)6.png")
  enemyblocking=loadAnimation("IMAGES/blocking 0.png","IMAGES/blocking (2)1.png","IMAGES/blocking (3)2.png","IMAGES/blocking (4)3.png");
enemycrouch=loadAnimation("IMAGES/crouch S P (2)1.png","IMAGES/crouch S P (3)2.png","IMAGES/crouch S P (4)3.png","IMAGES/crouch S P (5)4.png","IMAGES/crouch S P (6)5.png")
}
function setup(){
  createCanvas(1400,600);
  player= createSprite(300,400,100,150);
player.addAnimation("player",playeridle);
player.scale=3;
player.setCollider("rectangle",0,0,100,100);

player.debug = false

enemy= createSprite(1000,575,100,150);

enemy.setCollider("rectangle",0,0,enemy.width,enemy.height);
enemy.debug = false;
enemy.scale=3;
ground= createSprite(700,590,1400,30);

invisibleground= createSprite(700,585,1400,20);
invisibleground.visible=false;
enemy.setcollider= true;
}

function draw(){
  background(backgroundimg);
  drawSprites();
  player.collide(invisibleground);
 enemy.collide(invisibleground);


 if(gameState==="serve"){
    player.addAnimation("player",playeridle);
    enemy.addAnimation("enemy",enemyidle);
   
  }
  if(keyDown("space")&& gameState ==="serve"){
    gameState ="play"
      }
  if(gameState==="play"){
 
    //player.addAnimation("player",playerkick);
    //enemy.addAnimation("enemy",enemykick)
  }
}
 

  
  
  
  
  /*if(enemy.isTouching(player)){
    player.addAnimation("player",blocking);
    }
 
  if(gameState==="play"){
 
  player.addAnimation("player",playerkick);
  //enemy.addAnimation("enemy",enemykick)

 
 
 if(keyWentDown("ENTER")){
  player.addAnimation("player",crouch);
 }
 if(keyWentUp("ENTER")){
  player.addAnimation("player",playerwalk);
 }

 if(keyWentDown("d")){
  player.addAnimation("player",playerwalk);
  player.x=player.x+40;
 }
 if(keyWentDown("a")){
  player.addAnimation("player",playerwalk);
  player.x=player.x-40;
 }
 
 if(keyWentDown("w")){
  player.addAnimation("player",playerpunch);
  }
  if(keyWentUp("w")){
    player.addAnimation("player",playerwalk);
  }
 if(keyWentDown("s")){
  player.addAnimation("player",blocking);
    }
    if(keyWentUp("s")){
      player.addAnimation("player",playerwalk);
    }
    if(player.x-enemy.x<player.width/2+enemy.width/2&& enemy.x-player.x<enemy.width/2+player.width/2){
      enemy.addAnimation("enemy",enemyblocking);
    } else{
      enemy.addAnimation("enemy",enemyidle);
    } */



