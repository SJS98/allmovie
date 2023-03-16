// For Default Script

// To maintain css of options(movie,image,audio)
options(1);

// To run animation of poster
//  setInterval(changeImg,3000);




// Script for site...

const posters = [];
posters[0] = new Image();
posters[0].src = '../images/home poster/lagaan.jpg';

posters[1] = new Image();
posters[1].src = '../images/home poster/raees.jpg';

posters[2] = new Image();
posters[2].src = '../images/home poster/kgf.jpg';

posters[3] = new Image();
posters[3].src = '../images/mimgs/Tollywood/bahu.jfif';

// posters[4] = new Image();
// posters[4].src = '../images/mimgs/Hollywood/avt2.jfif';

// posters[5] = new Image();
// posters[5].src = '../images/home poster/raees.jpg';

// posters[6] = new Image();
// posters[6].src = '../images/home poster/raees.jpg';

let idx = 0;

function changeImg(){
  if(idx+1 == posters.length)
    idx = 0;
  document.getElementById("addimg").src = posters[idx++].src;
  setInterval(changeImg(),3000);
}

/*************************************/
// SignUp Validations and data storing 
function signUp(){
  validEmail();
  validPass();
}

/*************************************/
// Email Validation
function validEmail(){
  let email = document.getElementById('email').value;
  let msg = document.getElementById('login-msg');
  if(email.search("@")<3) msg.innerHTML += "Invalid Email"+"\n";
}

/*************************************/
// Password Validation

function validPass(){
  
  let pass = document.getElementById('pass').value;
  let msg = document.getElementById('login-msg');
  msg.innerText = "Password : ";

  if(!(checkUC(pass))) msg.innerText += "UpperCase reqiured/";
  if(!(checkLC(pass))) msg.innerText += "LowerCase reqiured/";
  if(!(checkLen(pass))) msg.innerText += "Atleast 8 characters/";
  if(!(checkNum(pass))) msg.innerText += "Numberic reqiured/";
  if(!(checkSpecial(pass))) msg.innerText += "~!@#$%^&*()_+ reqiured/";

  if(checkLen(pass) && checkUC(pass) && checkLC(pass) && checkNum(pass) && checkSpecial(pass)){
    msg.innerText = "Strong Password";
  }

  return true;
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


/*************************************/
// Paragraph Buttons

let para = true;
function paraVisible(){
  if(para){
    document.getElementById('para').style.transitionDuration = "1s";
    document.getElementById('para').style.display = 'block';
    para = false;
  } else {
    document.getElementById('para').style.transitionDuration = "1s";
    document.getElementById('para').style.display = 'none';
    para = true;
  }
}
/*************************************/


/*************************************/
// To maintain css of options(movie,image,audio)
function options(x){
  let movie = document.getElementById('movie');
  let image = document.getElementById('image');
  let audio = document.getElementById('audio');
  
  movie.style.transitionDuration = ".25s";
  image.style.transitionDuration = ".25s";
  audio.style.transitionDuration = ".25s";

  let movs = document.getElementById('movs');
  let imgs = document.getElementById('imgs');
  let auds = document.getElementById('auds');

  if(x==1){
    movie.style.display = 'flex';
    image.style.display = 'none';
    audio.style.display = 'none';

    movs.style.backgroundColor = 'white';
    imgs.style.backgroundColor = 'transparent';
    auds.style.backgroundColor = 'transparent';
    
  } else if(x==2) {
    movie.style.display = 'none';
    image.style.display = 'flex';
    audio.style.display = 'none';

    movs.style.backgroundColor = 'transparent';
    imgs.style.backgroundColor = 'white';
    auds.style.backgroundColor = 'transparent';
    
  } else {
    movie.style.display = 'none';
    image.style.display = 'none';
    audio.style.display = 'flex';

    movs.style.backgroundColor = 'transparent';
    imgs.style.backgroundColor = 'transparent';
    auds.style.backgroundColor = 'white';    
  }
}
/*************************************/



/*************************************/
// Login Alert 
function isLogIn(){
  let email = document.getElementById('email').value;
  if(email==null || pass==null){ 
    alert("Please log in first!!");
  } 
}



// Loading Before site load completely
// document.onreadystatechange = function() {
//   if (document.readyState !== "complete") {
//     document.querySelector(
//     "body").style.visibility = "hidden";
//     document.querySelector(
//     "#loader").style.visibility = "visible";
//   } else {
//     document.querySelector(
//     "#loader").style.display = "none";
//     document.querySelector(
//     "body").style.visibility = "visible";
//   }
// };
