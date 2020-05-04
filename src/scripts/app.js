// Get the navbar
let nav = document.getElementById("nav");
let aboutHeader = document.getElementById("about-header");


/* Open when someone clicks on #nav-toggle-btn */
function toggleNav() { 
  if (nav.style.width == "100%" ) {
    //document.getElementById("nav").style.width = "0%";
    document.getElementById("nav-toggle-btn").classList.remove("change");
    nav.removeAttribute("style");
  } else  {
    nav.style.width = "100%";
    document.getElementById("nav-toggle-btn").classList.add("change");
    
  }
}

/* Close Overlay */
function closeNav() {
  document.getElementById("nav-toggle-btn").classList.remove("change");
  if (window.screen.width <= 700) {
    //document.getElementById("nav").style.width = "0%";
    nav.removeAttribute("style");
    
  } 

}



/* Mobile Menu Toogle */
function navButton(x) {
  x.classList.toggle("change");
}


