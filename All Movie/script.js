// For Default Script

// To maintain css of options(movie,image,audio)
options(1);

// To run animation of poster
//  setInterval(changeImg,3000);

// Script for site...

// const posters = [];
// posters[0] = new Image();
// posters[0].src = '../images/home poster/lagaan.jpg';

// posters[1] = new Image();
// posters[1].src = '../images/home poster/raees.jpg';

// posters[2] = new Image();
// posters[2].src = '../images/home poster/kgf.jpg';

// posters[3] = new Image();
// posters[3].src = '../images/mimgs/Tollywood/bahu.jfif';

// posters[4] = new Image();
// posters[4].src = '../images/mimgs/Hollywood/avt2.jfif';

// posters[5] = new Image();
// posters[5].src = '../images/home poster/raees.jpg';

// posters[6] = new Image();
// posters[6].src = '../images/home poster/raees.jpg';

// let idx = 0;

// function changeImg(){
//   if(idx+1 == posters.length)
//     idx = 0;
//   document.getElementById("addimg").src = posters[idx++].src;
//   setInterval(changeImg(),3000);
// }


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
// Theme Button

// let color_picker = document.getElementById('color');
// color_picker.addEventListener("input", function() {
//   let color_code = document.getElementById('color').value;
//   document.getElementsByTagName('nav')[0].style.backgroundColor = color_code;
// });



/*************************************/
// 







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
// Not Working-->

// let small_menu = true;
// var closesm = document.getElementById('close-sm');

// document.getElementById('close-sm').addEventListener('click',function(){
//   if(small_menu)
//   document.getElementById('menu-canvas').style.display = "none";
// });




/*************************************/
