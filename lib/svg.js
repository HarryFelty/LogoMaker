const Triangle = require('./shapes');
const Circle = require('./shapes');
const Square = require('./shapes');

// `<svg version="1.1"
//     width="300"
//     height="200"
//     xmlns="http://www.w3.org/2000/svg">

//     ${Shape.render()}

//     <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>

// </svg>`

class SVG {
    constructor(shape, color, text, txtColor,) {
        this.shape = shape;
        this.color = color;
        this.text = text;
        this.txtColor = txtColor;
    }

    createShape() {
        if (shape === 'Triangle') {

            let newTriangle = Triangle(color);

            return `<svg version="1.1"
                width="300"
                height="200"
                xmlns="http://www.w3.org/2000/svg">
    
                ${newTriangle.render()}
    
                <text x="150" y="125" font-size="60" text-anchor="middle" fill="${txtColor}">${text}</text>
    
                </svg>`
        } else if (shape === 'Circle') {

            let newCircle = Circle(color);

            return `<svg version="1.1"
            width="300"
            height="200"
            xmlns="http://www.w3.org/2000/svg">
    
            ${newCircle.render()}
    
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${txtColor}">${text}</text>
    
            </svg>`
        } else {

            let newSquare = Square(color);

            return `<svg version="1.1"
                    width="300"
                    height="200"
                    xmlns="http://www.w3.org/2000/svg">
        
                    ${newSquare.render()}
        
                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${txtColor}">${text}</text>
        
                    </svg>`
        }
    }
}

module.exports = SVG;
