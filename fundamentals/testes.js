let a = 3

global.b = 123 // global equals to 'Window' object in the browser
this.c = 456

console.log(a)
console.log(global.a) // this does not work
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)