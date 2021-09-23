
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground
var angle=60

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 1.0,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
ground = Bodies.rectangle(200,200,200,10,ground_options);
World.add(world,ground)

//add to world


  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  push();
  translate(ground.position.x,ground.position.y)
  Matter.Body.rotate(ground,angle)
rotate(angle)
    //write a rectangle function to display ground.
 rect(0,0,200,10)
 pop();
angle+=0.1
ellipse(ball.position.x,ball.position.y,20);

  
  
}

