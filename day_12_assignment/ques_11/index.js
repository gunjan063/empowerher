const products=[
  {name:"laptop", price:1000},
  {name:"mouse", price:500},
  {name:"cpu", price:7},
    {name:"keyboard", price:130}
    ]
    
function processProducts(products){
  const productnames=[products.map(products=>products.name)]
}
console.log(products)

products.forEach(products=>{
  if(products.price>50){
    console.log(`${products.name} is above $500`);
  }else  {
    console.log(`${products.name} is below $500`);
  }
  
});
processProducts(products)

