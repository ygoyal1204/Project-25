class Paper{
    constructor(x, y, radius){
        var options ={
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:0.8
        }

        this.x= x;
        this.y= y;
        this.radius= radius;
        this.image=loadImage("paper.png");
        this.body = Bodies.circle(this.x, this.y, (this.radius-20)/2, options);
        World.add(world, this.body);

    }
    display(){
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        imageMode(CENTER)
        //strokeWeight(1)
        //fill(255, 0, 255)
        image(this.image, 0,0,this.radius, this.radius);
        pop()
    }
}