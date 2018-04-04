class Pointa {
    x: number;
    y: number;

    constructor(x?: number, y?:number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X is: ' + this.x + 'Y is: ' + this.y);
    }

}

let pointa = new Pointa(1, 2);
point.draw();