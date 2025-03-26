class Player {
    constructor (name, x, y, size) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color(0);
        this.stroke = color(100);
        this.color2 = color(0, 0, 0, 90);
    }
    
    // setTargetPosition(x) {
    //     this.targetX = x;
    // }

    // update () {
    //     this.x = lerp(this.x, this.targetX, 0.02);
    // }
    display () {
        push();
            //shadow
            translate(this.x-8, this.y+13);
            fill(this.color2);
            ellipse(0, 0, this.size, this.size/2);
        pop();

        push();
            translate(this.x, this.y)
            fill(this.color);
            stroke(this.stroke);
            circle(0, 0, this.size);
        pop();

    }
}