const { Triangle, Circle, Square } = require("./shapes");

test('Should create triangle and set color to blue.', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render()).toEqual(`<polygon points="0,0 200,0 100,200" fill="blue"/>`)
})

test('Should create circle and set color to blue.', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`)
})

test('Should create square and set color to blue.', () => {
    const shape = new Square();
    shape.setColor('blue');
    expect(shape.render()).toEqual(`<rect x="10" y="10" width="150" height="150" fill="blue"/>`)
})
