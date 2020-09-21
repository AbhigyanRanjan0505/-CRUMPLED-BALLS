class Paper {
    constructor(x, y, radius) {
        var paper_options = {
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
        }
        this.body = Bodies.circle(x, y, radius, paper_options);
        this.radius = radius
        World.add(world, this.body);
    }
    display() {
        ellipseMode(RADIUS);
        var pos = this.body.position;
        ellipse(pos.x, pos.y,this.radius,this.radius);
    }
}