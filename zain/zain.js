const pics=['assets/pic1.PNG','assets/pic2.PNG','assets/pic3.PNG']

let point1=document.getElementById('dot1');
let point2=document.getElementById('dot2');
let point3=document.getElementById('dot3');
let box1=document.getElementById('box1');
let box2=document.getElementById('box2');
let box3=document.getElementById('box3');
var pichanging=document.getElementById('rightdata');
let x=0;

let changeImage=(e)=>{
if (x<3) {
pichanging.innerHTML="<img src="+pics[x]+">";

    x+=1;
  }

  else {
  
    x=0;
}
}

    setInterval(function() {
        
      
        changeImage()

    },2000);




point1.addEventListener('click',()=>{
    box1.classList.remove('active')
    box2.classList='boxes active'
    box3.classList='boxes active'
})
point2.addEventListener('click',()=>{
    
    box2.classList.remove('active')
    box1.classList='boxes active'
    box3.classList='boxes active'
})
point3.addEventListener('click',()=>{
    box3.classList.remove('active')
    box1.classList='boxes active'
    box2.classList='boxes active'
})
