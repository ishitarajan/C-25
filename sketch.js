
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Paper1;
function preload(){
  //Paper1 = loadImage("Sprites/crumpled paper.png");
}
function setup() {
	createCanvas(800, 600);
  engine = Engine.create();
	world = engine.world;
  ground = new Ground(400,600,800,20);
  paper = new Paper(100,595,50);
  //paper = Paper1;
  dustbin1 = new Dustbin(700,590,100,10);
  dustbin2 = new Dustbin(750,570,10,50);
  dustbin3 = new Dustbin(650,570,10,50);  

  Engine.run(engine);
  }
function draw() {
  
  rectMode(CENTER);
  background("white");
  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:350,y:-350});
	}
}