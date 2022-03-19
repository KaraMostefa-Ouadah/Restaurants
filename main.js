// start header 
let close = document.querySelector(".close");
let search = document.querySelector(".search");
let sr = document.querySelector(".sr");
let recherche = document.querySelectorAll(".recherche");
let notSearch =  document.querySelector(".search .close");
let ul = document.querySelector("ul");
let side = document.querySelector(".side");
let menu = document.querySelectorAll(".menu span")[0];
let inp = document.querySelector(".search input");
let act = document.querySelectorAll(".nrml li:not(:last-child)");
let actsid = document.querySelectorAll(".bt li");


close.onclick = function() {
    side.style.cssText = " display : none;";
    document.querySelector(".overlay").style.cssText = "display: none;"

}
menu.onclick = function() {
    side.style.cssText = "display : flex; animation-name:side;animation-duration:.5s";
    document.querySelector(".overlay").style.cssText = "display: block;"
} 
notSearch.onclick = function(e) {
    search.style.cssText = " animation-name:";
}
recherche.forEach(rec => {
    rec.onclick = function() {
    search.style.cssText = "display : flex;";
    sr.style.cssText = "display : block; animation-name:popup;animation-duration:.5s";
    inp.focus();
} 
});
act.forEach(el => {
    el.addEventListener("click",(e) => {
        act.forEach(el => {
            el.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
    
});
actsid.forEach(el => {
    el.addEventListener("click",(e) => {
        actsid.forEach(el => {
            el.classList.remove("active");
        });
        
        e.currentTarget.classList.add("active");
    });
    
});
// end header 
// start landing
let active = document.querySelectorAll(".landing .bullet li");
let pics = document.querySelector(".landing .pics");
let clicked = false;

let i = 1;
active.forEach(el => {
    el.addEventListener("click",(e) => {
        active.forEach(el => {
            el.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        i = parseInt(el.getAttribute("id"))-1;
        pics.style.marginLeft = "-"+(i)+"00%";

        clearInterval(interval);
        setTimeout(function(){
            setInterval(slider,5000);
            console.log("waited")
        },5000);
        clicked = true;        
        i++;
    });
    
});

function slider() {
    active.forEach(el => {
        el.classList.remove("active");
    });
    
    if(i <= 4 ) {
        pics.style.marginLeft = "-"+(i)+"00%";
        active[i].classList.add("active");
        i++;
    }else {
        pics.style.marginLeft = "0%";        
        active[0].classList.add("active");
        i = 1;
    }


}
let interval = setInterval(slider,5000);
// end landing

// start top 
let resnext = document.querySelector(".next.res");
let resprevious = document.querySelector(".previous.res");
let vilnext = document.querySelector(".next.vil");
let vilprevious = document.querySelector(".previous.vil");
let reslist = document.querySelector(".resList");
let villist = document.querySelector(".vilList");


let j = 0;

resnext.onclick = function() {
        
        if(j >= 0) {
            resprevious.style.display = "flex";
        }
        if(j < 4){        
            j++;   
        reslist.style.marginLeft = "-" + (j*50) + "%";         
    }
}
resprevious.onclick = function() {

    if(j >= 1){
        j--;
        reslist.style.marginLeft = "-" +((j)*50) + "%";
}    
    if(j < 1) {
        resprevious.style.display = "none";


    }
}
let k = 0;

vilnext.onclick = function() {    
   
    if(k >= 0) {
        vilprevious.style.display = "flex"
    }
    if(k < 4){
        k++;
        villist.style.marginLeft = "-" + (k*50) + "%";
}
}
vilprevious.onclick = function() {

    if(k >= 1){
        k--;
        villist.style.marginLeft = "-" +((k)*50) + "%";
}    
    if(k < 1) {
        vilprevious.style.display = "none";


    }
}

// end top 
