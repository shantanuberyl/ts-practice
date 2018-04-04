class Point {
    constructor(private x?: number, private y?:number) {
    }

    draw() {
        console.log('X is: ' + this.x + 'Y is: ' + this.y);
    }

    get X() {
        return this.x
    }

    set X(value) {
        if (value < 0)
            throw new Error ('Value cannot be less than 0'); 
        
        this.x = value;
    }

}

let point = new Point(1, 3);
let x = point.X;
point.X = 10;
point.draw();