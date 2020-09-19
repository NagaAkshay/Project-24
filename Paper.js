class Paper{

    constructor(x, y){

        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
    this.body = Bodies.circle(x, y, 70, options);
    this.radius = 70;
    this.image = loadImage("Images/paper_IMG.png");
    World.add(world, this.body);
    this.body.debug = true;
    }

    display(){

        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.radius);
    }
}