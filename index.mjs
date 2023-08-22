import inquirer from "inquirer";
import fs from "fs/promises";

import SVG from "./lib/svg.js";

inquirer
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
    ]).then((res) => {
        let newSVG = new SVG(res.shape, res.color, res.text, res.txtColor);

        fs.writeFile("shape.svg", newSVG.markup, function (err) {
            if (err)
                console.log(err);

        })
    })



