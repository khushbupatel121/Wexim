
document.getElementById("menu").onclick = function () { myFunction() };
function myFunction() {
   document.getElementById("myMenu").style.display = 'block';
   document.getElementById("myMenu").style.right = "0%";
   // console.log(document.getElementById("myMenu").style);
}


function closefun() {
   // document.getElementById("myMenu").style.display = 'none';
   document.getElementById("myMenu").style.right = "-40%";

}

var screenWidth = window.screen.width;
window.onscroll = function () {
   scrollFunction()
};
// function scrollFunction() {
//         var header = document.getElementsByClassName('nav-side')[0];
// var navbar=document.getElementsByClassName("nav-side fixed-navbar")[0];

// console.log(navbar);
//         if (document.documentElement.scrollTop > 215)  {
//             // header.classList.add("hide");
//             header.classList.add("fixed-navbar");
//         }
//         else{
//          // header.classList.remove("hide");
//          navbar.classList.remove("fixed-navbar");
//         }
//         }

function scrollFunction() {

   var headermain = document.getElementById('header-id');
   headermain.style.transition = "1s ease-in-out"
   var navlink = document.getElementsByClassName("nav-link");
   var logo1 = document.getElementById("logo-1");
   var bar = document.getElementById("bar");


   console.log(navlink);

   if (document.documentElement.scrollTop > 215) {

      headermain.classList.add("fixed-navbar");
      bar.classList.add("text--black");

      for (i = 0; i < navlink.length; i++) {
         navlink[i].classList.add("text--black");

      }
      logo1.src = "./img/logo-black.png";

   }
   else {

      headermain.classList.remove("fixed-navbar");
      bar.classList.remove("text--black");

      for (i = 0; i < navlink.length; i++) {
         navlink[i].classList.remove("text--black");

      }
      logo1.src = "./img/logo-white.png";
   }
}