var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X is: ' + this.x + 'Y is: ' + this.y);
    };
    return Point;
}());
var point = new Point(1, 3);
point.draw();
