const escola = "Cod3r"

console.log(escola.charAt(4))

// Does not throw an Exception or error, simply returns null
console.log(escola.charAt(7))

// This returns the char code in ASCII in the position '3' of the string.
console.log(escola.charCodeAt(3))

// Returns the index of a given character
console.log(escola.indexOf('o'))

// Returns a new string from another, starting on the given index.
console.log(escola.substring(1))
console.log(escola.substring(0, 3)) // can also be used as an interval

// Concatenating strings
console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "! " + 2)

// Replaes a given character in the string
// Replaces only the first that it founds
console.log(('T333st3').replace(3, 'e'))

// The "split" function returns an array from a string
console.log('Ana,Maria,Pedro'.split(','))