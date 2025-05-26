const maximumWealth = (accounts) => {
  let maxCustomerWealth = 0;

  for (let i = 0; i < accounts.length; i++) {//Loop through each customer (or item) of the array (0,1,2).
    let currentCustomerWealth = 0;

    for (let j = 0; j < accounts[i].length; j++) {//This is another loop — this one goes through the bank accounts for the current customer.
      currentCustomerWealth += accounts[i][j];//Accounts[i] is the current customer (a row). Accounts[i][j] is the money they have in one bank account.
    }

    if (currentCustomerWealth > maxCustomerWealth) {
      maxCustomerWealth = currentCustomerWealth;
    }
  }

  return maxCustomerWealth;
}

console.log(maximumWealth([[7,1,3], [2,8,7], [1,9,5]]));