// Add your Circle class here
class Circle {
    constructor (radius) {
        this.radius = radius;
    }

    get diameter() {
        return this.radius + this.radius;
    }

    get circumference() {
        return Math.PI * (this.radius * 2);
    }

    get area() {
        let rSquared = this.radius * this.radius;
        return Math.PI * rSquared;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    set circumference(circumference) {
        let withoutPi = circumference / Math.PI;
        this.radius = withoutPi / 2;
    }

    // LOOK, YOU REMEMBERED YOUR MATH. Grandma would be so proud.
}