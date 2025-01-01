function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(arg: any): arg is number {
  return typeof arg === 'number';
}

let result = add(5, 3); // result is 8
result = subtract(10, 5); // result is 5

let strNum = "3";

// Using type guard
if (isNumber(strNum)) {
  let correctResult = add(5, strNum);
} else {
  console.error("Type mismatch in add function");
}

// Using type assertion (less safe)
let anotherResult = add(5, strNum as number); // this will compile and run but it is unsafe

console.log(result); // 8
console.log(anotherResult); // NaN
// The type guard solution offers improved type safety over the type assertion.