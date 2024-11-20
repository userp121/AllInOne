# bank-management-app
### 1. **BankAccount Class**

The `BankAccount` class is a fundamental part of your code, representing a bank account with various methods and properties. Here's an overview of how it's utilized:

- **Constructor**: The class constructor sets initial values for the account holder, balance, and an empty array for transactions.

- **`showUserInfo()`**: This method retrieves account information from local storage and updates the account holder's name in the UI.

- **`deposit(amount)`**: This method allows deposits into the account. It checks if the deposited amount is valid, updates the balance, records the transaction, and updates the local storage.

- **`withdraw(amount)`**: Similar to `deposit`, this method handles withdrawals. It checks if the withdrawal amount is valid, updates the balance, records the transaction, and updates the local storage.

- **`updateLocalStorage()`**: This method stores the account information, including transactions, in local storage.

- **`loadFromLocalStorage()`**: This method retrieves account information, including transactions, from local storage during page load.

- **`checkBalance()`**: This method returns the balance in a formatted string.

### 2. **Document Event Listeners**

- `DOMContentLoaded` event listeners are used to execute code when the document is fully loaded. It initializes the `BankAccount` object, loads data from local storage, and shows user information.

### 3. **UI Interaction Functions**

- `handleDeposit()` and `handleWithdraw()` functions control the display of deposit and withdrawal forms when buttons are clicked.

- `onChangeSubmit()` updates the displayed deposit and withdrawal amounts based on user input.

### 4. **Deposit and Withdraw Submit Functions**

- `depositSubmit()` and `withdrawSubmit()` are executed when users submit deposit and withdrawal forms. They call methods from the `BankAccount` class, handle exceptions using try-catch, and update the UI.

### 5. **Display Result Function**

- `displayResult(message)` shows a modal message with a specified message and sets a timeout to hide it after a few seconds.

### 6. **Create Account and Login**

- `handleCreateForm()` handles creating a user account and storing it in local storage.

- `handleLoginForm()` handles user login and displays appropriate alerts based on the login result.

### 7. **User Interface (UI) Interaction**

- Various event listeners control the UI, such as opening and closing the navigation menu, displaying the balance, and toggling the eye icon for balance visibility.

### 8. **Closing Forms**

- `closeActionCon()` hides the forms (deposit and withdrawal) when the close buttons are clicked.

### 9. **User Input Validation and Feedback**

- Your code includes input validation and provides feedback to users when errors occur, ensuring a smooth user experience.

### 10. **Local Storage Usage**

- Data is stored in local storage to persist user account information, including balances and transaction history, between page loads.

### 11. **Error Handling with Try-Catch-Finally**

- Try-catch blocks are used to catch exceptions that may occur during deposit and withdrawal operations. The `finally` block is used for cleanup operations, such as hiding the form, ensuring that certain code executes regardless of whether an exception occurs or not.

