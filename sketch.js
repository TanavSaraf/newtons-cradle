
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var ground;
var chain1,chain2,chain3,chain4,chain5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=Bodies.rectangle(400,200,width,20,{isStatic:true} );

	bob1=new Bob(200,600,50,{   restitution:1,density:1.2,friction:0.5})
	bob2=new Bob(300,600,50,{   restitution:1,density:1.2,friction:0.5})
	bob3=new Bob(400,600,50,{   restitution:1,density:1.2,friction:0.5})
	bob4=new Bob(500,600,50,{   restitution:1,density:1.2,friction:0.5})
	bob5=new Bob(600,600,50,{	restitution:1,density:1.2,friction:0.5})
	
	chain1=new Chain(bob1.body,ground.body,200,200);
	chain2=new Chain(bob2.body,ground.body,300,200);
	chain3=new Chain(bob3.body,ground.body,400,200);
	chain4=new Chain(bob4.body,ground.body,500,200);
	chain5=new Chain(bob5.body,ground.body,600,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  rect(ground.position.x,ground.position.y,width,20)
  

	chain1.display();
	chain2.display();
	chain3.display();
	chain4.display();
	chain5.display();

	bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  drawSprites();
 
}
 function keyPressed()
 {
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(bob5.body,bob5.body.position,{x:700,y:-700})
	}
 }


