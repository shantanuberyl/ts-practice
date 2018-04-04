class Point {
    x: number;
    y: number;

    draw() {
        console.log('X is: ' + this.x + 'Y is: ' + this.y);
    }

}

let point = new Point();
point.x = 2;
point.y = 4;
point.draw();