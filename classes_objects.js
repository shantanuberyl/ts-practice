var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X is: ' + this.x + 'Y is: ' + this.y);
    };
    return Point;
}());
var point = new Point();
point.x = 2;
point.y = 4;
point.draw();
