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




function validLogin(){
  let emailRegEx = /[@]/;
  let passRegEx = /[0-9][a-z][A-Z][~!@#$%^&*()_+]/g;
  let e = document.getElementById('email').value.toString();
  let p = document.getElementById('pass').value.toString();
  
}

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


// let email;
// let pass;

// function validLogin(){
//    email = getCookie("email");
//    pass = getCookie("pass");
//    document.getElementById("login-head").innerHTML = document.cookie;
//   if(email.includes("@")){
//     if(email.includes(pass)){
//       let name = email.split("@")[0];
//       let btn = document.getElementById("login-head").innerHTML = name;
//       document.getElementById("login-msg").innerHTML = "log in successful.";
//       document.getElementById("login-form").style.display = "none";
//       document.getElementById("lobtn").style.display = "block";
//     } else {
//       document.getElementById("login-msg").innerHTML = "Wrong Password";
//       email = null;
//       pass = null;
//     }
//   } else if(email!="" && pass!="") {
//     let newEmail = document.getElementById("email").value.toString();
//     let newPass = document.getElementById("pass").value.toString();
//     setCookie("email",newEmail,1);
//     setCookie("pass",newPass,1);

//     let name = newEmail.split("@")[0];
//     let btn = document.getElementById("login-head").innerHTML = name;
//     document.getElementById("login-msg").innerHTML = "log in successful.";
//     document.getElementById("login-form").style.display = "none";
//     document.getElementById("lobtn").style.display = "block";
//   } else {
//     document.getElementById("login-msg").innerHTML = "Wrong Email";
//     email = null;
//     pass = null;
//   }
// }

// function isLogIn(){
//   checkCookie();
//   if(email==null || pass==null){ 
//     alert("Please log in first!!");
//   } 
// }

// document.getElementById("lobtn").addEventListener('click',logout);
// function logout(){
//   document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//   document.cookie = "pass=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
//   email = null ;
//   pass = null ;
//   let btn = document.getElementById("login-head").innerHTML = "Log In";
//   document.getElementById("login-msg").innerHTML = "Logout successful.";
//   document.getElementById("login-form").style.display = "block";
//   document.getElementById("lobtn").style.display = "none";
// }


// // Cookies Operations

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//   let expires = "expires="+d.toUTCString();
//   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }

// function getCookie(cname) {
//   let name = cname + "=";
//   let ca = document.cookie.split(';');
//   for(let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }

// function checkCookie() {
//   let uemail = getCookie("email");
//   let upass = getCookie("pass");
//   document.getElementById("login-msg").innerHTML = "Logout successful.";
//   if (uemail != "" && pass != "") {
//     email = uemail;
//     pass = upass;
//   }
//   validLogin();
// }