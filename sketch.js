const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world, boxb;
var boxr, boxl;

function setup() {

  createCanvas(800,400);
   engine= Engine.create();
   world= engine.world;
  

   boxb= new Boxbase(200,100,50,50);
   boxr= new Boxright(200,200)
   boxl= new Boxleft(300,100)
}

function draw() {
  background(0);  
boxb.display();
boxr.display();
boxl.display();
}



