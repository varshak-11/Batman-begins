class drops {
constructor(x,y){
var options = {
    'friction':1.0,
}
this.body = Bodies.ellipse(x, y, options);
World.add(this.body,world)
}
display(){
    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0,);
    pop();
}



}

