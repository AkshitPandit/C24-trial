class Paper{
    constructor(x,y,_radius,color) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction:0.5,
            density:1.2,
        }
}

Matter.Bodies.circle(x, y, radius, [options], [maxSides])

        this.body = Bodies.ellipse(x,y,_radius,options);
        this._radius = _radius;
        this.color = color;

        World.add(world,this.body);
    }

    display() {
        ellipseMode(CENTER);
        fill(this.color);
        ellipse(this.body.position.x,this.body.position.y,this._radius);
        
    }
}
}
