function Counter() {
  let count = 0; 

  return {
    increment: function() {
      count++;
      console.log("Current count:", count);
    },
    decrement: function() {
      count--;
      console.log("Current count:", count);
    },
    getCount: function() {
      return count;
    }
  };
}

const counter1 = Counter();
counter1.increment(); 
counter1.increment(); 
counter1.decrement(); 


const counter2 = Counter();
counter2.increment(); 
counter1.increment(); 
counter2.decrement(); 




///2nd ques
function createBankAccount() {
  let balance = 0; 
  let transactionhistory = []; 

  return {
    deposit: function(amount) {
      balance = balance+ amount;
      transactionhistory.push(`Deposit: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },
   
}
}

const account = createBankAccount();
account.deposit(500);   