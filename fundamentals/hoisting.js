// Interpreter adds line below at the beginning 
// var = a

console.log('a = ' + a)

var a = 2

console.log('a = ' + a)

/**
 * We can see that the variable a was defined, but had no value
 * in the first line. That occurs because of JS's hoisting.
 * When creating variables with 'var', the interpreter automatically
 * pushes the declaration to the uppermost line of the code
 * That makes the variable accessible and defined at any
 * point of the program.
 * 
 * 
 * 
 */