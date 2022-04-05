// Dividing by zero in JS returns "Infinity"
console.log(7/0)

// Weak typing example, where a String is divided 
// by a Number. JS Handles that and performs the mathematical operation.
console.log("10"/2)
console.log("3" + 2) // string has the preference while using '+'!
console.log("3" - 2)

// Impossivel
console.log("Show!" * 2)

// Due to JS's floating point specification, some operations 
// can lead to imprecise results, such as below.
console.log(0.1 + 0.7)

// Using the literal inside the parenthesis
// allow us to use the Number type in-built functions
console.log((10.4567).toFixed(2))