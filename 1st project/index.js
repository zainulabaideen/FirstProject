var topnav=document.getElementById("navtop")
var logobox=document.getElementById('logo');
var navlinks=document.getElementById('links');

var logoimage=document.getElementById('logoimg');
var navbar=document.querySelector("nav");
var messagesender=document.getElementById("userresponse");
var sendbtn=document.getElementById("send");
var textinput=document.getElementById("inputtext");
const messangediv=document.getElementById('messangebox');
const closenav=document.getElementById('cross');

const allbars=document.getElementById('bar');
const closebtn=document.getElementById('closing');
var messanger=document.getElementById("mess");
var contactlogo=document.getElementById("contact");
var responsive=document.getElementById("resnav");
var responsives=document.getElementById("new");
var navredata=document.getElementById("data");
var ull=document.getElementById("ul");





// cart 


//nav
responsive.style.display="none";

allbars.addEventListener("click",()=>{
    allbars.style.display="none";
    closenav.style.display="inline-block";
    responsive.style.display="block";
    
})
closenav.addEventListener("click",()=>{
    allbars.style.display="inline-block"
    closenav.style.display="none";
    responsive.style.display="none";

})

messanger.style.display="none";
contactlogo.addEventListener("click",()=>{
    contactlogo.style.display="none";
    messanger.style.display="block";

})
closebtn.addEventListener("click",()=>{
    contactlogo.style.display="flex";
    messanger.style.display="none";
})


// responsivenav 
ull.style.display="none"

let a=1;
navredata.addEventListener("click",()=>{
a++;

if(a%2===0){
ull.style.display="none"
}
else{
ull.style.display="block"

}

    
})
// sticky nav 
function changeCss () {
   if(scrollY >= 100){
    navbar.style.width="100%";
    allbars.style.display="none";
    topnav.style.display = "none";
    logobox.style.height="80px";
    logoimage.style.height="80px";
    navlinks.style.justifyContent="end";
   
  


   }     else{
    allbars.style.display="inline-block";
    topnav.style.display = "flex";
    logobox.style.height="100px";
    navbar.style.width="90%";
    logoimage.style.height="100px";

    navbar.style.width="100%"; 


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
function messagesended() {
    messagesender.innerText=textinput.value;
}

sendbtn.addEventListener('click',messagesended);



// FAQs Bottom Portion
function toggleAnswer(id) {
    const answer = document.getElementById(`answer-${id}`);
    answer.classList.toggle('show');
}

function toggleImages(id) {
    const plusImg = document.getElementById(`plus-img-${id}`);
    const minusImg = document.getElementById(`minus-img-${id}`);

    plusImg.style.display = plusImg.style.display === 'none' ? 'inline' : 'none';
    minusImg.style.display = minusImg.style.display === 'none' ? 'inline' : 'none';
}
// cart 
var btnofcart=document.getElementById("cartbtn");
var cartbtn=btnofcart.getElementsByClassName("addtocart");

if(cartbtn.click===true){
 alert('hello'); 
 }
   


