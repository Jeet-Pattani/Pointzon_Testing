const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("openHamburgerMenu");
    links.forEach(link => {
        link.classList.toggle("fadeHamburgerMenu");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});