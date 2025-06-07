const users = [];
const user={}
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
    <button onClick='showLogin()'>Alread a Member? Login here...</button>
    `;
  root.innerHTML = str;
};

const showHome = () => {
  let str = `
    <h1>Welcome ${user.name}</h1>
    <hr>
    <p><select>
     <option value=0>--select--</option>
      <option value=1>Deposit</option>
      <option value=2>Withdraw</option>
      </select></p>
      <p>
      <input type='number' id='txtAmount'>
      </p>
      <p><button>Submit</button>

    <button onclick='showLogin()'>Logout</button>
    <hr>
    <p>Current balance:${user.balance}
    `;
  root.innerHTML = str;
};

const addUser = () => {
  const user = {
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
  const user = users.find(
    (e) => e.email === email && e.pass === pass
  )
  if (user) {
    showHome();
  } else {
    dvMsg.innerHTML = "Access Denied";
  }
};