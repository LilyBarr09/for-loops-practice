// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const clientsWithWrongBalance = [];
  for (let person of array) {
    let withdrawalTotal = 0;
    if (person.withdrawals) {
      const { withdrawals } = person;

      for (let i = 0; i < withdrawals.length; i++) {
        withdrawalTotal += withdrawals[i];
      }
    }
    let depositTotal = 0;
    if (person.deposits) {
      const { deposits } = person;

      for (let i = 0; i < deposits.length; i++) {
        depositTotal += deposits[i];
      }
    }
    const isCorrectBalance = depositTotal - withdrawalTotal === person.balance;
    if (!isCorrectBalance) {
      clientsWithWrongBalance.push(person);
    }
  }
  return clientsWithWrongBalance;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
