class PAPER{
    constructor(x,y){

        var options ={
            isStatic : false,
            restitution : 0.9,
            friction :0.9,
            density : 1.8

        }

        this.paper = Bodies.rectangle(x,y,30,30,options);
        this.w = 30;
        this.h = 30;
        World.add(world,this.paper); 
        this.image = loadImage("paper.png");
    }

    display(){
        var pos = this.paper.position
        push() 
        rectMode(CENTER);
        rect(pos.x,pos.y,this.w,this.h); 
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.w,this.h)
        pop() 
    }
}