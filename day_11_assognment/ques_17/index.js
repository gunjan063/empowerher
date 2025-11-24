arr1 = [1, 2, 3];
arr2 = [4, 5];
//const sum=[...arr1,...arr2]
const sum=[...arr1,...arr2]
 console.log(sum)
 
 const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};
const {name,address:{city,pin}}=user
console.log(name)
console.log(city)
console.log(pin)