var topnav=document.querySelector("navtop");
var logobox=document.getElementById('logo');
var navlinks=document.getElementById('links');

var logoimage=document.getElementById('logoimg');
var navbar=document.querySelector("nav");

function changeCss () {
    var bodyElement = document.querySelector("body");
   if(this.scrollY > 100){
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