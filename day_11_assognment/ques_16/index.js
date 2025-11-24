// a) isEven function
const isEven = (n) => n % 2 === 0;
console.log(isEven(4)); 
console.log(isEven(9)); 


// b) Ternary operator for marks
const result = (marks) => (marks >= 35 ? "Pass" : "Fail");
console.log(result(50)); // Pass
console.log(result(20)); //

// c) greet function using ternary
const greet = (name) => {
  console.log(`Hello, ${name ? name : "Guest"}`);
};

greet("John");  
greet();      