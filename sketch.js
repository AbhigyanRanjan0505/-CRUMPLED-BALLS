//creates constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creates variables
var dustbin1, dustbin2, dustbin3, paper, ground;

function setup() {
	//creates a canvas
	createCanvas(1350, 625);

	//creates a engine and calls the world
	engine = Engine.create();
	world = engine.world;

	//makes objects from blueprints
	paper = new Paper(50, height - 25, 10);
	dustbin1 = new Dustbin(1148, height - 60, 15, 100);
	dustbin2 = new Dustbin(1230, height - 20, 150, 15);
	dustbin3 = new Dustbin(1300, height - 60, 15, 100);
	ground = new Ground(width / 2, height - 7, 1350, 15);

	//runs the engine
	Engine.run(engine);
}

function draw() {
	//creates a rectangle at center
	rectMode(CENTER);

	//creates a background
	background(0);

	//displays the objects
	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground.display();

	//calls the function
	keyPressed();

	//draws all the sprites
	drawSprites();
}

function keyPressed() {
	//bounces the paper
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:1,y:-1});
	}
}
