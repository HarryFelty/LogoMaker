import inquirer from "inquirer";
const fs = require("fs");
let SVG = require("./lib/svg");


let { shape, color, text, txtColor } = await inquirer
    .prompt([
        {
            type: 'list',
            name: 'shape',
            message: "Select a shape.",
            choices: [
                'Triangle',
                'Circle',
                'Square'
            ],
        },
        {
            type: 'input',
            name: 'color',
            message: "Enter color of shape.",
        },
        {
            type: 'input',
            name: 'text',
            message: "Enter text to go in shape.",
        },
        {
            type: 'input',
            name: 'txtColor',
            message: "Enter color of text.",
        },
    ])

let example = new SVG(shape, color, text, txtColor);

fs.writeFile("shape.svg", example.createShape, function (err) {
    if (err) {
        console.log(err);
    }
})
