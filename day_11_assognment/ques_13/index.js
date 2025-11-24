const people =  [ 
  { name: "Alice", 
address: { city: "New York", 
street: { name: "Broadway", number: 123 } 
}
},
{
 name: "Bob",
    address: {
      city: "Los Angeles",
      street: { name: "Sunset Boulevard", number: 456 }
    }
  }
  ]
const result=people.map(({name, address:{city, street:{name:strreetname}}})=>
`${name} lives in ${city}on ${strreetname}`);
console.log(result);