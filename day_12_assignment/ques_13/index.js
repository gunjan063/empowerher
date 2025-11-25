const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

function countCategories(arr) {

  const categoryCount = arr.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return categoryCount;
}


const counted = countCategories(categories);
console.log(counted);


const sortedCategories = Object.entries(counted)
  .sort((a, b) => b[1] - a[1])   
  .map(entry => entry[0]);        

console.log(sortedCategories);