
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1, box2, box3;
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
     rectMode(CENTER)
	packageSprite=createSprite(width/2, 210, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.1
	
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;
	
	packageBody = Bodies.circle(width/2 , 200 , 9 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);
	 
	

	//rectMode(CENTER);
   box1 = new Box(400,650,200,20);
   //box1.shapeColor="red"
   box2 = new Box(305,630,20,70);
   //box2.shapeColor="red"
   box3 = new Box(499,630,20,70);
   //box3.shapeColor="red"
   



	//Engine.run(engine)
  
}


function draw() {
 
  background(0);
  Engine.update(engine);
  text(mouseX+","+mouseY,mouseX,mouseY)
  box1.display();
  box2.display();
  box3.display();
  
  keyPressed();
  drawSprites();
  
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
	
    
    
  }
}



 
	

  



