function rand({min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({max: 50, min: 40}))
console.log(rand({ min: 955 }))
console.log(rand({}))
// console.log(rand()) // throws error

function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
    console.log(size, cords, radius);
    // do some chart drawing
}
  
drawES2015Chart({
    cords: { x: 18, y: 30 },
    radius: 30
});

drawES2015Chart() // does not throw error becase of ' = {} ' at the end. this specifies that it is ok to have empty arguments.