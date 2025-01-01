function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); // result is 8
result = subtract(10, 5); // result is 5

// This is wrong, TypeScript will allow this type of error
let wrongResult = add(5, "3"); // Type Error should be raised here, but it compiles without errors