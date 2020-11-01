class Dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=200;
        this.height=213;
        this.thickness=20;
        this.angle=0;
        this.image=loadImage("dustbin.png");

        this.bottomBody=Bodies.rectangle(this.x, this.y, this.width, this.thickness, {isStatic:true});
        World.add(world, this.bottomBody);

        this.leftBody=Bodies.rectangle(this.x-this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:true});
        World.add(world, this.leftBody);

        this.rightBody=Bodies.rectangle(this.x+this.width/2, this.y-this.height/2, this.thickness, this.height, {isStatic:true});
        World.add(world, this.rightBody);

    }
    display(){
        var posBottom = this.bottomBody.position;

        push()
        translate(posBottom.x, posBottom.y+10);
        imageMode(CENTER)
        //noStroke()
        //fill("white")
        image(this.image, 0, -this.height/2,this.width,this.height)
        pop()
    }
}