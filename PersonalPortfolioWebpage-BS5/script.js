const tile = document.querySelectorAll(".card-body");

function mouseEnterLeave(event, opacity, speed) {
    for (let i=0; i < tile.length; i++){
        tile[i].addEventListener(event, (e) => {        
            const span = tile[i].getElementsByClassName("spanLink");
    
            for(let val of span){  
                val.style.opacity = opacity;
                val.style.transitionDuration = speed; 
            }
        });
    }
}

mouseEnterLeave("mouseenter", "1", "0.6s");
mouseEnterLeave("mouseleave", "0", "0.3s");
