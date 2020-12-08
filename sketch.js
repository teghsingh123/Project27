
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof1,roof2,roof3,roof4,roof5;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(340,300,40);
	bob2 = new Bob(420,300,40);
	bob3 = new Bob(500,300,40);
	bob4 = new Bob(580,300,40);
	bob5 = new Bob(660,300,40);
	roof1 = new Roof(width/2,height/4,width/2,20)
	//roof2 = new Roof(width/2,200,width,20)
	//roof3 = new Roof(width/2,200,width,20)
	//roof4 = new Roof(width/2,200,width,20)
	//roof5 = new Roof(width/2,200,width,20)
	chain1 = new Chain(roof1.body,bob1.body,-160,0);
	chain2 = new Chain(roof1.body,bob2.body,-80,0);
	chain3 = new Chain(roof1.body,bob3.body,0,0);
	chain4 = new Chain(roof1.body,bob4.body,80,0);
	chain5 = new Chain(roof1.body,bob5.body,160,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  //roof2.display();
  //roof3.display();
  //roof4.display();
  //roof5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}



