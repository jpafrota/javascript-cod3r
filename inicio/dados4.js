let a = 3;
const b = 2;
// ...

a = a + 10;

// This causes an exception
// Can't change constant value
b = b + 1;

// ...

console.log(a);
console.log(b);
console.log(a == 3);