class Log {
    constructor(x,y,height,angle){
    
    var options={
    
    restitution:0.3,
    friction : 3.5,
    density : 0.4
    
    }
    
    this.body = Bodies.rectangle(x,y,20,height,options);
    this.width = 20;
    this.height = height;
    Matter.Body.setAngle(this.body,angle)
    World.add(myworld,this.body);
    
    }
     display(){
       var pos = this.body.position;
       var angle = this.body.angle;
    
    push(); 
     translate(pos.x,pos.y);
     rotate(angle);
    fill("lightbrown");
     rectMode(CENTER);
     strokeWeight(4)
     stroke("brown");  
     rect(0, 0 ,this.width,this.height);
     pop();
    
     } 
    
    
    }