class Dustbin{
    constructor(x,y,width,height){
        var options={
            'isStatic':true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.image = loadImage("Sprites/dustbingreen.png")
        
    }
    display(){
        image(this.image,650,490,100,100);
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        
    }
}