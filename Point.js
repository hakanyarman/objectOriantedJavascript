class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceToOrigin() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    distanceTo(point) {
        return Math.sqrt(Math.pow(this.x - point.x, 2) + Math.pow(this.y - point.y, 2));
    }
}

const point1 = new Point(2, 6);
const point2 = new Point(5, 2);

const distanceBetweenPoint1AndPoint2 = point1.distanceTo(point2);

//console.log("distance between point1 and point2 is: ", distanceBetweenPoint1AndPoint2);

export { Point, point1, point2, distanceBetweenPoint1AndPoint2 };