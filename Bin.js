class Bin {
    constructor(x,y,width,height) {
        var options={
            isStatic: true,
            friction: 0.5
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("Sprites/dustbingreen.png")
        this.width= width;
        this.height= height;
        World.add(world,this.body);
    }

    display() {
        var pos= this.body.position;
        push();
        rectMode(CENTER);
        fill("purple")
        image(this.image, 500, 420, 200, 230);
        pop();
    }
}