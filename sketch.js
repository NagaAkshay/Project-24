
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var part1, part2, part3;
var paperBall, paper_img, dustbin_img ;

function preload() {
	paper_img = loadImage("Images/paper_img.png");
	dustbin_img = loadImage("Images/dustbingreen_IMG.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 690, 800, 20);

	part1 = new Rectangle(90, 630, 20, 100);
	part2 = new Rectangle(210, 630, 20, 100);
	part3 = new Rectangle(150, 670, 100, 20);
	
	

	paperBall = new Paper(600,130, 70);
	paperBall.debug = true;
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");

  
  

  ground.display();
  part1.display();
  part2.display();
  part3.display();

  paperBall.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		var pos = paperBall.body.position;
		Matter.Body.applyForce(paperBall.body, pos, {x:-400, y:-400});
	}
	
}



