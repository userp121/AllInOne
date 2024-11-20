// Bank Account Class
class BankAccount {
    constructor(accountHolder, balance ) {
        this.accountHolder = accountHolder;
        this.balance = balance;
        this.transactions = []; 
    }
    
    showUserInfo() {
        const storedAccountJSON = localStorage.getItem('userAccount');
        const storedAccount = JSON.parse(storedAccountJSON);
        // console.log(storedAccount.usernameid)
        this.accountHolder = storedAccount.usernameid
        const userName = document.querySelector(".user-name")
        if (userName) {
            userName.textContent = this.accountHolder
        }
    
    }

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push({ type: 'deposit', amount, date: new Date() });
            this.updateLocalStorage();
            document.getElementById('balance').textContent = `$${this.balance.toLocaleString()}`
            return `Deposited $${amount}`;
        } else {
            throw new Error('Invalid deposit amount.');
        }
    }


    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push({ type: 'withdraw', amount, date: new Date() });
            this.updateLocalStorage();
            document.getElementById('balance').textContent = `$${this.balance.toLocaleString()}`
            return `Withdrawn $${amount}`;
        } else {
            throw new Error('Invalid withdrawal amount or insufficient balance.');
        }
    }

    updateLocalStorage() {
        const userStorage = {
            usernameid: this.accountHolder,
            balance: this.balance,
            transactions: this.transactions,
        };
        localStorage.setItem('userAccount', JSON.stringify(userStorage));
    }

    loadFromLocalStorage() {
        // Load account information including transaction history from local storage
        const storedAccountJSON = localStorage.getItem('userAccount');
        if (storedAccountJSON) {
            const storedAccount = JSON.parse(storedAccountJSON);
            this.accountHolder = storedAccount.usernameid;
            this.balance = storedAccount.balance;
            this.transactions = storedAccount.transactions || [];
        }
    }


    checkBalance() {
        return `Balance is $${this.balance.toLocaleString()}`;
    }

  
}


const account = new BankAccount(this.balance,  0);

document.addEventListener("DOMContentLoaded", function () {
    const account = new BankAccount('', 0); 
    account.loadFromLocalStorage(); 
    account.showUserInfo();
});

const handleDeposit = () => {
    const depositCon = document.querySelector(".deposit-input-con")
    depositCon.style.display = "flex"
    const blur = document.getElementById('blur');
    blur.style.display = "flex";
    

}
const handleWidthraw = () => {
    const withdrawcon = document.querySelector(".withdraw-input-con")
    withdrawcon.style.display = "flex"
    const blur = document.getElementById('blur');
    blur.style.display = "flex";

}

const onChangeSubmit = () => {
    const withdrawAmount = parseFloat(document.getElementById('withdraw-amount').value);
    const withdrawInput = document.querySelector(".withdraw-input");

    if (withdrawInput) {
        withdrawInput.textContent = `$${withdrawAmount.toLocaleString()}`; 
    }

    const depositAmount = parseFloat(document.getElementById('deposit-amount').value);
    const depositInput = document.querySelector(".deposit-input"); 

    if (depositInput) {
        depositInput.textContent = `$${depositAmount.toLocaleString()}`; 
    }

}



const depositSubmit = () => {
    const amount = parseFloat(document.getElementById('deposit-amount').value);
    console.log(amount)
    try {
    const message = account.deposit(amount);
    depositCon.style.display = "none"
    displayResult(message);
    } catch (error) {
        depositCon.style.display = "none"
        displayResult(error.message);
        console.log()
    }  finally {
        if (depositCon) {
            depositCon.style.display = "none";
        }

    }
}


const withdrawSubmit = () => {
    const amount = parseFloat(document.getElementById('withdraw-amount').value);
    try {
        const message = account.withdraw(amount);
        displayResult(message);
    } catch (error) {
        displayResult(error.message);
        console.error(error);
    } finally {
        if (withdrawCon) {
            withdrawCon.style.display = "none";
        }
    }
}


const depositCon = document.querySelector(".deposit-input-con")
const withdrawCon = document.querySelector(".withdraw-input-con")
const handleDepositCon = (e) => {
    e.preventDefault();
    depositSubmit()
    
}

const handleWithdrawCon = (e) => {
    e.preventDefault();
    withdrawSubmit()
}
const handlebalanceCheck = () => {
    const message = account.checkBalance();
    displayResult(message);
}

depositCon && depositCon.addEventListener("submit", handleDepositCon)
withdrawCon && withdrawCon.addEventListener("submit", handleWithdrawCon)




function displayResult(message) {
    const modal = document.getElementById('result-message-con');
    const blur = document.getElementById('blur');
    modal.style.display = "flex";
    blur.style.display = "flex";
   
    setTimeout(() => {
        blur.style.display = "none";
        modal.style.display = "none";
    }, 3000);
    blur.onclick = () => {
        modal.style.display = "none";
    }
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = message;
}


function handleCreateForm(e) {
  e.preventDefault();
  const usernameid = document.getElementById('usernameid').value;
const password = document.getElementById('password').value;


    const account = {
        usernameid,
        password
    };


    localStorage.setItem('userAccount', JSON.stringify(account));
    alert('Account created successfully!');
    window.open("login.html", "_blank")

}

document.addEventListener("DOMContentLoaded", function(){
    const createForm = document.getElementById('create-form');
createForm && createForm.addEventListener('submit', handleCreateForm);

});

const handleLoginForm = (e) => {
    e.preventDefault();
    const enteredUsername = document.getElementById('login-usernameid').value;
    const enteredPassword = document.getElementById('login-password').value;
   console.log("login")

    const storedAccountJSON = localStorage.getItem('userAccount');

    if (storedAccountJSON === null) {
        alert('No account found. Please create an account first.');
    } else {
        const storedAccount = JSON.parse(storedAccountJSON);

        switch (true) {
            case enteredUsername === storedAccount.usernameid && enteredPassword === storedAccount.password:
                alert('Login successful!');
                break;

            case enteredUsername !== storedAccount.usernameid && enteredPassword === storedAccount.password:
                alert('Invalid username. Please try again.');
                break;

            case enteredUsername === storedAccount.usernameid && enteredPassword !== storedAccount.password:
                alert('Invalid password. Please try again.');
                break;

            default:
                alert('Invalid username or password. Please try again.');
                break;
        }
    }

 window.open("index.html", "_blank");

}

document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById('login-form');
    loginForm && loginForm.addEventListener('submit', handleLoginForm)
    
});

const userIcon = document.querySelector(".user-con")
const navbar = document.querySelector(".navbar")
const blur = document.getElementById('blur');
const close = document.querySelector('.close');
const closeInputd = document.querySelector('.close-input-d');
const closeInputw = document.querySelector('.close-input-w');
const eyeclose = document.querySelector('.fa-eye-slash'); 


userIcon && userIcon.addEventListener("click", () => {
navbar.classList.add("opennav");
blur.style.display = "flex";
})
blur && blur.addEventListener("click", () => {
    navbar.classList.remove("opennav")
    blur.style.display = "none";
    depositCon.style.display = "none"
    withdrawCon.style.display = "none"
})
close && close.addEventListener("click", () => {
    navbar.classList.remove("opennav")
    blur.style.display = "none";
})

eyeclose && eyeclose.addEventListener("click", () => {
    const balance = document.getElementById('balance');
    eyeclose.classList.toggle("fa-eye")
    balance.classList.toggle("b-blur")
})

const closeActionCon = () => {
    blur.style.display = "none";
    depositCon.style.display = "none";
    withdrawCon.style.display = "none";
}

closeInputd && closeInputd.addEventListener("click", closeActionCon);
closeInputw && closeInputw.addEventListener("click", closeActionCon);


