const users = [];
let user = {}

const showLogin = () => {
  let str = `
    <div>
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
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button onclick='addUser()'>Register</button>
    <hr>
    <button onclick='showLogin()'>Already a Member? Login here...</button>
    `;
  root.innerHTML = str;
};

const showHome = () => {
  let str = `
    <h1>Welcome ${user.name}</h1>
    <hr>
    <p>
      <select id='ddlType'>
        <option value=0>--select--</option>
        <option value=1>Deposit</option>
        <option value=2>Withdraw</option>
      </select>
    </p>
    <p>
      <input type='number' id='txtAmount' placeholder='Enter Amount'>
    </p>
    <p>
      <button onclick='handleTransaction()'>Submit</button>
      <button onclick='showLogin()'>Logout</button>
    </p>
    <hr>
    <p>Current balance: ₹${user.balance}</p>
    <p><div id='dvStatus'></div></p>
    `;
  root.innerHTML = str;
};

const addUser = () => {
  const obj = {
    name: document.getElementById("txtName").value,
    email: document.getElementById("txtEmail").value,
    pass: document.getElementById("txtPass").value,
    balance: 0
  };
  users.push(obj);
  showLogin();
};

const validateUser = () => {
  let email = document.getElementById("txtEmail").value;
  let pass = document.getElementById("txtPass").value;
  user = users.find((e) => e.email === email && e.pass === pass)
  if (user) {
    showHome();
  } else {
    dvMsg.innerHTML = "Access Denied";
  }
};

// ✅ NEW FUNCTION
const handleTransaction = () => {
  const type = parseInt(document.getElementById("ddlType").value);
  const amt = parseFloat(document.getElementById("txtAmount").value);

  if (!type || isNaN(amt) || amt <= 0) {
    dvStatus.innerHTML = "❗ Please select a valid transaction and amount.";
    return;
  }

  if (type === 1) {
    // Deposit
    user.balance += amt;
    dvStatus.innerHTML = `✅ ₹${amt} deposited successfully.`;
  } else if (type === 2) {
    // Withdraw
    if (user.balance >= amt) {
      user.balance -= amt;
      dvStatus.innerHTML = `✅ ₹${amt} withdrawn successfully.`;
    } else {
      dvStatus.innerHTML = "❌ Insufficient balance.";
      return;
    }
  }

  // Refresh balance
  showHome();
};
