var iss, spacecraft;
var bg, issimg, scimg;
var hasDocked = false;

function preload(){
  bg= loadImage("space.jpg");
  issimg = loadImage("iss.png");
  scimg = loadImage("spacecraft1.png");
  scimg1 = loadImage("spacecraft2.png");
  scimg2= loadImage("spacecraft3.png");
  scimg3= loadImage("spacecraft4.png");
}
function setup() {
  createCanvas(600, 350);
  spacecraft = createSprite(285,240);
  spacecraft.addImage(scimg);
  spacecraft.scale = 0.15;
  
  iss = createSprite(330,130);
  iss.addImage(issimg);
  iss.scale = 0.25;
}
function draw() {
  background(bg);
  
  spacecraft.addImage(scimg);
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
    
  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2;
  }
    
  if(keyDown("DOWN_ARROW")){
    spacecraft.y = spacecraft.y +2;
    spacecraft.addImage(scimg1);
  }

  if(keyDown("LEFT")){
    spacecraft.x = spacecraft.x -2;
    spacecraft.addImage(scimg3);
  }

  if(keyDown("RIGHT")){
    spacecraft.x = spacecraft.x +2;
    spacecraft.addImage(scimg2);
  }


}
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
   //code
   hasDocked=true;
   textSize(30);
   fill("white");
   text("Docking Succesful",200,300);
  }
  drawSprites();
}