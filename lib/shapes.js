class Shape {
    constructor(fill = "green") {
        this.fill = fill;
    }

    setColor(color) {
        this.fill = color;
    }
}

class Triangle extends Shape {
    constructor(fill) {
        super(fill);
    }

    render() {
        return `<polygon points="0,0 200,0 100,200" fill="${this.fill}"/>`
    }
}

class Circle extends Shape {
    constructor(fill, radius) {
        super(fill);
        this.radius = radius;
    }

    render() {
        return `<circle cx="150" cy="100" r="${this.radius}" fill="${this.fill}" />`
    }
}

class Square extends Shape {
    constructor(fill) {
        super(fill);
    }

    render() {
        return `<rect x="10" y="10" width="150" height="150" fill="${this.fill}"/>`
    }
}

module.exports = Shape, Triangle, Circle, Square;