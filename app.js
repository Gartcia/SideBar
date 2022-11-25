const menu = document.querySelector(".toggle");
const links = document.querySelector(".links");
const button = document.querySelector(".menu-button");
menu.addEventListener("click", function(){
    links.classList.toggle("show-links");
    button.classList.toggle("menu-buttonx");
})
