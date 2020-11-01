
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper;
var dustbin;
var ground;

function setup() {
	createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, 570, width, 20);
	paper = new Paper(200, 500, 70);
	dustbin = new Dustbin(1000, 550);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
  
  ground.display();
  paper.display();
  dustbin.display();
  
  fill("blue")
  textSize(28)
  textAlign(CENTER)
  text("THROW THE PAPER BALL IN THE DUSTBIN!", 600, 80);
  fill("red")
  text("Use UP ARROW key to move the paper ball.", 600, 130);
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:82, y:-82});
	}
}



