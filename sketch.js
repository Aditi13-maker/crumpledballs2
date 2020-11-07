const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var trash;

function setup() {
var canvas = createCanvas(900,300);
    
	engine = Engine.create();
	world = engine.world;
  dustbin=new Dustbin(658,248)
  trashObject=new Trash(50,280,40);
 
  dustbin1=new Edges(700,242,10,80);
  dustbin2=new Dustbin(658,280,80,10)
  dustbin3=new Edges(615,242,10,80);
	ground=new Ground(290,290,1600,10)

 Engine.run(engine);

}


function draw() {
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
  background("white");
  
  Engine.update(engine);
  
  ground.display();
  trashObject.display();
  dustbin.display()
  
  
  
 
 drawSprites()
}
function keyPressed() {
  if (keyCode === UP_ARROW) { 
    Matter.Body.applyForce(trashObject.body,trashObject.body.position,{x:60,y:-70}); }
    }