const Triangle = require("./shapes").Triangle;
const Circle = require("./shapes").Circle;
const Square = require("./shapes").Square;

class SVG {
    constructor(shape, color, text, txtColor) {
        this.shape = shape;
        this.color = color;
        this.text = text;
        this.txtColor = txtColor;
        this.markup = this.markup;

        if (this.shape === 'Triangle') {
            let newTriangle = new Triangle(this.color);

            this.markup = `<svg version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg">
            
    ${newTriangle.render()}
            
    <text x="100" y="100" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.text}</text>
            
</svg>`
        } else if (this.shape === 'Circle') {
            let newCircle = new Circle(this.color);

            this.markup = `<svg version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg">
            
    ${newCircle.render()}
            
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.text}</text>
            
</svg>`
        } else {
            let newSquare = new Square(this.color);

            this.markup = `<svg version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg">
            
    ${newSquare.render()}
            
    <text x="100" y="100" font-size="60" text-anchor="middle" fill="${this.txtColor}">${this.text}</text>
            
</svg>`
        }
    }
}
module.exports = SVG;
