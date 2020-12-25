
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var block1,block2,block3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,690,800,20);
	paper = new Paper(200,600,20);

	block1 = new Dustbin(200,330,120,20);
	block2 = new Dustbin(165,305,20,120)
	block3 = new Dustbin(235,305,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  


    ground.display();

	paper.display();

	block1.display();
	block2.display();
	block3.display();


 
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:28,y:-55});

	}
}

