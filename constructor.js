var Pointa = /** @class */ (function () {
    function Pointa(x, y) {
        this.x = x;
        this.y = y;
    }
    Pointa.prototype.draw = function () {
        console.log('X is: ' + this.x + 'Y is: ' + this.y);
    };
    return Pointa;
}());
var pointa = new Pointa(1, 2);
point.draw();
