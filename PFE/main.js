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
let act = document.querySelectorAll(".nrml li");
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
	
	
    let topp = ["background-image: url(../images/1-La-Palette.jpg);","background-image: url(../images/1-le\ cirque.jpg);","background-image: url(../images/1-OB_AQUA_750x400_01\ 3.jpg);","background-image: url(../images/1-Villa\ Mikuna.jpg);","background-image: url(../images/1-OB_LIFE_750x400_01\ copie.jpg);"];

let i = 1;
active.forEach(el => {
    el.addEventListener("click",(e) => {
        active.forEach(el => {
            el.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
        i = active.indexOf(el);
    });
    
});

function slider() {
    active.forEach(el => {
        el.classList.remove("active");
    });
    if(i < 5) {
        document.querySelector(".landing .container").style.cssText = '"'+topp[i]+'"';
        active[i].classList.add("active");
        i++;
    }else {
        i = 1;
        active[0].classList.add("active");
        document.querySelector(".landing .container").style.backgroundImage = '"'+topp[0]+'"';
    }
    

}
setInterval(slider,1000);
// end landing