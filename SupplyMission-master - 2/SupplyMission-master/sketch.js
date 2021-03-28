var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var boxLeft,boxRight,boxDown,boxPos,boxY;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	 
	engine = Engine.create();
	world = engine.world;
	
	boxPos = width/2-100
	boxY = 650;
	boxLeft = createSprite(boxPos-20,boxY-40,20,100);
	World.add(world,boxLeft);
	boxLeftBody = Bodies.rectangle(boxPos-50,boxY,20,100,{isStatic:true})
	boxLeft.shapeColor = color(255,0,0);

	boxDown = createSprite(boxPos+70,boxY,200,20);
	World.add(world,boxDown);
	boxDownBody = Bodies.rectangle(boxPos,boxY+30,20,100,{isStatic:true})
	boxDown.shapeColor = color(255,0,0);

	boxRight = createSprite(boxPos+180,boxY-40,20,100);
	World.add(world,boxRight);
	boxightBody = Bodies.rectangle(boxPos+50,boxY,20,100,{isStatic:true})
	boxRight.shapeColor = color(255,0,0);

	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
  }
}