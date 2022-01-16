const button = document.querySelector(".navbar-burger");
const menu = document.querySelector(".page-nav");

console.log(button);
console.log(menu);

button.addEventListener("click", function(){ 
    console.log("click")
    menu.classList.toggle("is-show")
})
