
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies=Matter.Bodies;

var myengine,myworld
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;
var ground;


function setup() {
  createCanvas(1200,600);
  
  myengine=Engine.create();
  myworld=myengine.world;


box1 = new Box(600,500,80,80);
box2 = new Box(810,500,80,80);
box3 = new Box(600,400,80,80);
box4 = new Box(810,400,80,80);
box5 = new Box(700,300,80,80);


ground= new Ground(600,580,1200,5);

pig1= new Pig(700,500);
pig2= new Pig(700,400);


log1=new Log(700,450,300,PI/2);
log2=new Log(700,350,300,PI/2);
log3=new Log(650,300,160,PI/7);
log4=new Log(750,300,160,-PI/7);

bird1=new Bird(200,100);

}

function draw() {

  Engine.update(myengine);

  background(0); 

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();

  ground.display();

  pig1.display();
  pig2.display();

  log1.display();
  log2.display();
  log3.display();
  log4.display();

  bird1.display();


}