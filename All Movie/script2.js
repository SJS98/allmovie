
// Theme Button
let color_picker = document.getElementById('color');
let themebtn = document.getElementById('themebtn');
let langbtn = document.getElementById('lang');

themebtn.addEventListener('mouseover',function(){
  color_picker.style.display = "block";
  langbtn.style.display = "block";
  themebtn.addEventListener('mouseleave',function(){
  color_picker.style.display = "none";
  langbtn.style.display = "none";
  });
});

color_picker.addEventListener("input", function() {
  let color_code = document.getElementById('color').value;
  document.getElementsByTagName('body')[0].style.background = "linear-gradient(100deg,"+color_code+",black)";
});

