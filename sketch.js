var d1,d2,d3;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	d2 = new Dustbin(500,650,20,100,"red");
	d3 = new Dustbin(295,650,20,100,"red");
	d1 = new Dustbin(400,690,200,20,"red");

	paper = new Paper(150,390,5,"blue");

	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown(UP_ARROW)){
	keyPressed();
  }

  d1.display();
  d1.display();
  d1.display();
  paper.display();

  Engine.update(engine);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode(UP_ARROW)){
		Matter.paper.applyForce(paper.body, paper.body.position,{x:85,y:-85})
	}
}



