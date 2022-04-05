let thisComparison = function (param) {
    console.log (this === param)
}

thisComparison(global)

const obj = {}

console.log(thisComparison) 
thisComparison = thisComparison.bind(obj)
console.log(thisComparison)

thisComparison(global)
thisComparison(obj)

let thisComparisonArrow = param => console.log(this === param)

thisComparisonArrow(global) // arrow functions are always bound with the scope of its declaration
thisComparisonArrow(module.exports)


// Now take a look:
thisComparison(this)
/** 
 * And it prints false!!!
 * Because 'this' always points to the scope of the function's calling.
 * 
 * NOTE: You CAN'T change the binding from arrow functions. See example below.
 */

thisComparisonArrow = thisComparisonArrow.bind(obj)
thisComparisonArrow(obj)