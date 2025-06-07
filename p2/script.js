
const users = [];
let user={}
const showLogin = () => {
  let str = `
    <div>
    <div class = "App-Container">
    <h1>Login Form</h1>
    <p><div id="dvMsg"></div></p>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick='validateUser()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `;
  root.innerHTML = str;
};

const showRegister = () => {
  let str = `
  <div class = "App-Container">
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
     <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button onclick='addUser()'>Register</button>
    <hr>
    <button onClick='showLogin()'>Alread a Member? Login here...</button>
    `;
  root.innerHTML = str;
};

const showHome = () => {
  let str = `
    <h1>Welcome ${user.name}</h1>
    <hr>
    <p><select id ='ddlTrans'>
     <option value=0>--select--</option>
      <option value=1>Deposit</option>
      <option value=2>Withdraw</option>
      <option value=3>Transfer</option>
      </select></p>
      <p>
      <input type='number' id='txtAmount'>
      </p>
      <p><button onclick='submitTransaction()'>Submit</button>


    <button onclick='showLogin()'>Logout</button>
    <hr>
    <p>Current balance:${user.balance}
    `;
  root.innerHTML = str;
};

const addUser = () => {
   user = {
    name: document.getElementById("txtName").value,
    email: document.getElementById("txtEmail").value,
    pass: document.getElementById("txtPass").value,
    balance:0
  };
  users.push(user);
  console.log(users);
  showLogin();
};

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  user = users.find(
    (e) => e.email === email && e.pass === pass
  )
  if (user) {
    showHome();
  } else {
    dvMsg.innerHTML = "Access Denied";
  }
};
const submitTransaction = () => {
     const choice = document.getElementById("ddlTrans").value;
  const amount = parseFloat(document.getElementById("txtAmount").value);

  if (isNaN(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (choice == "1") {
    deposit(amount);
  }
  if (choice == "2") {
    withdraw(amount);
  }
  if (choice == "3") {
    Transfer(amount);
  }
};

const deposit = (amount) => {
  user.balance += amount;
  showHome();
};

const withdraw = (amount) => {
    if (user.balance >= amount) {
        user.balance -= amount;
        showHome();
    } else {
        alert("Insufficient balance.");
    }
}
const Transfer = (amount) => {
  const email = prompt("Enter the email of the user to transfer to:");
  const recipient = users.find((e) => e.email === email);
  
  if (recipient) {
    if (user.balance >= amount) {
      user.balance -= amount;
      recipient.balance += amount;
      alert(`Transferred ${amount} to ${recipient.name}.`);
      showHome();
    } else {
      alert("Insufficient balance.");
    }
  } else {
    alert("Recipient not found.");
  }
};