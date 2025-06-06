const showLogin = () => {
    let str=`
    <div class='App-Container'>
    <h1>Login Form</h1>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <p><button onclick='showWelcome()'>Log In</button></p>
    <p><button onclick='showRegister()'>Create Account</button></p>
    </div>
    `
    root.innerHTML = str
}

const showRegister = () => {
      let str=`
    <div class='App-Container'>
    <h1>Register Form</h1>
    <p><input type="text" id="txtName"></p>
    <p><input type="text" id="txtEmail"></p>
    <p><input type="password" id="txtPass"></p>
    <button>Register</button>
    <p><button onclick='showLogin()'>Back to Login</button></p>
    <p><a href ="#" onclick='showLogin()'>Already have an account?</a></p>
    `
    root.innerHTML = str
}

const showWelcome = () => {
    let str=`
    <div class='App-Container'>
    <h1>Welcome</h1>
    <p><button onclick='showLogin()'>Log Out</button></p>
    </div>
    `
    root.innerHTML = str
}