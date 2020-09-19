function setup() {
  createCanvas(8000,8000);

  fixedRect = createSprite(400, 200, 50, 150);
fixedRect.shapeColor = "pink";

  movingRect = createSprite(600,150, 150, 50);
movingRect.shapeColor = "pink"

fixedRect.debug = true
movingRect.debug = true
}


function draw() {
  background("blue");  
  
  fixedRect.x = World.mouseX
  fixedRect.y = World.mouseY

if (movingRect.x - fixedRect.x < fixedRect.width/2+ movingRect.width/2 &&
fixedRect.x - movingRect.x < fixedRect.width/2+ movingRect.width/2 &&
movingRect.y - fixedRect.y < fixedRect.height/2+ movingRect.height/2 &&
fixedRect.y - movingRect.y < fixedRect.height/2+ movingRect.height/2 )
{
movingRect.shapeColor = "purple"
fixedRect.shapeColor = "purple"
}
 
else {
fixedRect.shapeColor = "pink";
movingRect.shapeColor = "pink"
}


  drawSprites();
}