
isLogIn();
/*************************************/
// Login Alert
function isLogIn(){
  let email = localStorage.getItem('email');
  let pass = localStorage.getItem('pass');
  if(email==null || pass==null){
    alert("Please log in first!!");
  }else {
    document.getElementById('login-head').style.display = "none";
    document.getElementById('lobtn').style.display = "block";
    document.getElementById('login-form').style.display = "none";
  }
}

/*************************************/
// Login Function
function logIn(){
  let email = document.getElementById('email').value;
  let pass = document.getElementById('pass').value;
  let localEmail = localStorage.getItem('email');
  let localPass = localStorage.getItem('pass');
  let msg = document.getElementById('login-msg');
  if((email == localEmail) && (pass == localPass)){
    document.getElementById('login-form').style.display = "none";
    document.getElementById('lobtn').style.display = "block";
    msg.innerText = "Log in successful!"
  } else if((email == localEmail) && (pass != localPass)){
    msg.innerText = "Wrong password"
  } else if((email != localEmail) && (pass == localPass)){
    msg.innerText = "Wrong email!"
  } else if(localEmail == null || localPass==null){
    msg.innerText = "Create account first!"
  }
}

/*************************************/
// log out function
function logOut(){

  localStorage.removeItem('email');
  localStorage.removeItem('pass');

  document.getElementById('login-head').style.display = "block";
  document.getElementById('lobtn').style.display = "none";
  document.getElementById('login-msg').innerText = "Log out successful!"
  document.getElementById('login-form').style.display = "flex";  
}

/*************************************/
// SignUp Validations and data storing 
function signUp(){
  const ev = validEmail();
  const pv = validPass();
  if(ev && pv){
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    localStorage.setItem('email',email);
    localStorage.setItem('pass',pass);
    
    document.getElementById('login-head').innerText = "Loged In";
    document.getElementById('lobtn').style.display = "block";
    document.getElementById('login-msg').innerText = "Your account has been Created!"
    document.getElementById('login-form').style.display = "none";
  }
}

/*************************************/
// Email Validation
function validEmail(){

  let email = document.getElementById('email').value;
  let msg = document.getElementById('valid-msg');
  msg.innerText = "";
  if(email.search("@")<3){ 
    msg.innerHTML = "Invalid Email"+"\n";
    return false;
  }
  return true;
}

/*************************************/
// Password Validation

function validPass(){
  
  let pass = document.getElementById('pass').value;
  let msg = document.getElementById('login-msg');
  msg.style.color = "green";
  msg.innerText = "Password : ";

  if(!(checkUC(pass))) msg.innerText += "UpperCase reqiured/";
  if(!(checkLC(pass))) msg.innerText += "LowerCase reqiured/";
  if(!(checkLen(pass))) msg.innerText += "Atleast 8 characters/";
  if(!(checkNum(pass))) msg.innerText += "Numberic reqiured/";
  if(!(checkSpecial(pass))) msg.innerText += "~!@#$%^&*()_+ reqiured/";

  if(checkLen(pass) && checkUC(pass) && checkLC(pass) && checkNum(pass) && checkSpecial(pass)){
    msg.style.color = "green";
    msg.innerText = "Strong Password";
    return true;
  }
  return false;  
}


/*************************************/
// Validation Checks
function checkNum(pass){
  let pattern = /[0-9]/;
  if(pattern.test(pass)) return true;
  else return false;
}

function checkUC(pass){
  let pattern = /[A-Z]/;
  if(pattern.test(pass)) return true;
  else return false;
}

function checkLC(pass){
  let pattern = /[a-z]/;
  if(pattern.test(pass)) return true;
  else return false;
}

function checkLen(pass){
  if(pass.length>=8) return true;
  else return false;
}

function checkemail(email){
  let emailRegEx = /[@]/;
  if(email.search(emailRegEx)>=3) return true;
  else return false;
}

function checkSpecial(pass){
  let pattern = /[~!@#$%^&*()_+]/;
  return pattern.test(pass);  
}