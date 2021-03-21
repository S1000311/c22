const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var world,engine,ball,ground


function setup() {
  createCanvas(800,400);
  engine = Engine.create ()
  world = engine.world
  
var ground_option ={
isStatic:true 
}
  ground = Bodies.rectangle(400,390,800,20,ground_option)
  World.add(world,ground)
  
  var ball_option ={
    restitution: 1
  }

  ball = Bodies.circle(400,10,40,ball_option)
  World.add(world,ball)
}

function draw() {
  background(0);
  Engine.update(engine) 
  fill ("beige") 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,20)

  fill ("red")
  ellipseMode(RADIUS)
  ellipse (ball.position.x,ball.position.y,40,40)
}