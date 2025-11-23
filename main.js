// navigation
const menu = document.querySelector('#menu');
const topnav = document.querySelector('#topnav ul');
const navLinks = document.querySelectorAll('#topnav a');

menu.addEventListener("click", () => {
    topnav.classList.toggle("active");
});

// close top navigation when user clicks any link
navLinks.forEach(link => {
 link.addEventListener("click", () => {
  topnav.classList.remove("active");
 });
});