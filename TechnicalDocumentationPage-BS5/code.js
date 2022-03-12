const fixed = document.querySelector(".fixed-top");


function myFunction(x){
    if (x.matches){
        document.body.style.backgroundColor = "yellow";
        fixed.classList.remove("fixed-top");
    }else{
        document.body.style.backgroundColor = "pink";
        fixed.classList.add("fixed-top");
    }
}

let x = window.matchMedia("(min-width: 992px)");


x.addEventListener('change', myFunction)


myFunction(x)
