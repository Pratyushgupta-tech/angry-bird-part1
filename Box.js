class Box {
constructor(x,y,width,height){

var options={

restitution:0.3,
friction : 0.6,
density : 0.4

}

this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(myworld,this.body)

}
 display(){
   var pos = this.body.position;
   var angle = this.body.angle;

push(); 
 translate(pos.x,pos.y);
 rotate(angle);
fill("white");
 rectMode(CENTER);
 strokeWeight(4)
 stroke("green");  
 rect(0, 0 ,this.width,this.height);
 pop();

 } 


} 
