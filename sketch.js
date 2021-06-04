function preload(){
  mario1=loadAnimation("1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png");
  groundImg=loadImage("bg2.png");
 bg1=loadImage("bg6.jpg");
 bg2=loadImage("bg4.jpg");
 bg3=loadImage("bg5.jpg");
 birdImg=loadImage("bird1.png")
}
function setup() {
  createCanvas(1200,400);
  
  
  mario=createSprite(100,370,20,40);
  mario.addAnimation("marioRunning",mario1);
  ground=createSprite(280,440,2400,20);
  ground.addImage(groundImg);

  invisible=createSprite(100,380,100,10);
invisible.visible=false;
  
}

function draw() {
  background(bg1); 
  if(ground.x<250){
    ground.x=700
  }
  ground.velocityX=-7;
  console.log(ground.x);
   if(keyDown("space")){
      mario.velocityY=-13;
     
   }
   mario.velocityY= mario.velocityY + 0.8;
   mario.collide(invisible);
  
  birds();
  
  drawSprites();
}

function birds(){
  if(frameCount% 100===0){
    bird=createSprite(1200,Math.round(random(10,250)))
    bird.addImage(birdImg)
    bird.velocityX=-6;
    bird.scale=0.5;
  }
}