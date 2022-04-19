var cube
function setup() {
  
  createCanvas(800,600);
cube=createSprite(100,100,100,100)
}

function draw() 
{
  background("blue");
cube.shapeColor="orange"
if(keyIsDown(RIGHT_ARROW)){
  cube.position.x=cube.position.x+5
background("red") 
} 
  if(keyIsDown(LEFT_ARROW)){
    cube.position.x=cube.position.x-5
  background("green")  
  } 
    if(keyIsDown(UP_ARROW)){
      cube.position.y=cube.position.y-5
    background("yellow")  
    } 
      if(keyIsDown(DOWN_ARROW)){
        cube.position.y=cube.position.y+5
      background("yellow")  
      } 
 

        drawSprites()
}




