const fixed = document.querySelector(".fixed-top");
const body = document.querySelector("body");
const main = document.querySelector(".rob-main");
const menu = document.querySelector(".list-group");
const htmMain = document.querySelector("html");
const robNav = document.querySelector(".rob-nav");


function myFunction(x){
    if (x.matches){        
        main.style.marginLeft = "350px";
        main.classList.remove("mt-5");
        body.style.marginTop = "0";
     
        menu.style.height = "500px";
        menu.style.overflowY = "auto";
        htmMain.style.scrollPaddingTop = "0";
        robNav.classList.remove("bg-white");
        }else{
        main.style.marginLeft = "0";
        main.classList.add("mt-5");
        body.style.marginTop = "220px";
        
        menu.style.height = "220px";
        menu.style.overflowY = "scroll";
        htmMain.style.scrollPaddingTop = "300px";        
        robNav.classList.add("bg-white");
    }
}

let x = window.matchMedia("(min-width: 992px)");


x.addEventListener('change', myFunction)


myFunction(x);