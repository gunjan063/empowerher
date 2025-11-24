// a)
console.log(`5 + 7 = ${5 + 7}`);

// b) 
const multiLine = `
Line 1
Line 2
Line 3
`;
console.log(multiLine);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full Name: ${firstName} ${lastName}`);




// a) 
const square = n => n * n;
console.log(square(5));

// b) 

const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test(); 

// c) 
const obj2 = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj2.test(); // 50



// a) 
const product = { name: "Pen", price: 10 };
const copyProduct = { ...product };
console.log(copyProduct);

// b) 
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
console.log(merged);

// c)
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(4, 9, 1, 7));
