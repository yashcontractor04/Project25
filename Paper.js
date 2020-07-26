class Paper {
    constructor(x,y,radius) {
        var options={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body= Bodies.circle(x,y,radius,options);
        this.image=loadImage("Sprites/crumpledpaper.png");
        this.radius= radius;
        World.add(world,this.body);
    }

    display() {
        var pos= this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 70, 70);
        pop();
    }
}