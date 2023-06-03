var topnav=document.getElementById("navtop")
var logobox=document.getElementById('logo');
var navlinks=document.getElementById('links');

var logoimage=document.getElementById('logoimg');
var navbar=document.querySelector("nav");

const bar=document.getElementById('bar');
const close=document.getElementById('close');
//nav
if(bar){
    bar.addEventListener('click',()=>{
        navbar.classList.add('active')
    })
}
if(close){
    close.addEventListener('click',()=>{
        navbar.classList.remove('active')
    })
}




function changeCss () {
   if(scrollY > 70){
   
    topnav.style.display = "none";
    logobox.style.height="80px";
    logoimage.style.height="80px";
    navlinks.style.justifyContent="end";
    navbar.style.width="100%";
  


   }     else{
    topnav.style.display = "flex";
    logobox.style.height="100px";
    navbar.style.width="90%";
    logoimage.style.height="100px";

    navlinks.style.justifyContent="space-between";

   } 
  }
  
  window.addEventListener("scroll", changeCss , false);






//   slider
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}
dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};
