const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world,ball;
var ground; 
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options= {
    isStatic:true
  }
  var ballOptions={
    restitution:0.9
  }
  ground=Bodies.rectangle(200,390,200,20,options)
  ball=Bodies.circle(200,100,20,ballOptions)
  World.add(world,ground)
  World.add(world,ball)
  console.log(ground)
  console.log(ground.type);
}

function draw() {
  background("black"); 
  Engine.update(engine)
  rectMode(CENTER)
 rect(ground.position.x,ground.position.y,400,20)
 ellipseMode(CENTER)
 ellipse(ball.position.x,ball.position.y,20,20)
}