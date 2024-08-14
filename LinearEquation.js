import { distanceBetweenPoint1AndPoint2, Point, point1, point2 } from "./Point.js";

class LinearEquation {
    constructor(p1, p2) {
        this.p1 = p1;
        this.p2 = p2;
    }

    slope() {
        const deltaX = this.p2.x - this.p1.x;
        if (deltaX === 0) {
            throw new Error("Sıfıra bölme hatası");
        }
        return (this.p2.y - this.p1.y) / deltaX;
    }

    equation() {
        const slopeValue = this.slope();
        return `y=${slopeValue}x+(${this.p1.y - slopeValue * this.p1.x})`;
    }
}

const linearEquation1 = new LinearEquation(point1, point2);

console.log("the distance between point1 and point2 is: ", distanceBetweenPoint1AndPoint2);
console.log("slope of the line is ", linearEquation1.slope());
console.log(linearEquation1.equation());
