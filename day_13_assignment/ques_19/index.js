let age = 25; 

function displayage() {
  console.log("Current age:", age);
}

function changeage(newage) {
  age = newage; 
  console.log("Updated age:", age);
}


displayage(); 
changeage(30);
displayage();      
