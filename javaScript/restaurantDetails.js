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

let actsid = document.querySelectorAll(".bt li");
let login = document.querySelectorAll(".login");
let accountForm = document.querySelector(".account form");
let account = document.querySelector(".account");
let closeForm = document.querySelectorAll(".account .close");


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
// act.forEach(el => {
//     el.addEventListener("click",(e) => {
//         act.forEach(el => {
//             el.classList.remove("active");
//         });
// document.jlllmsoeil(o)
//         e.currentTarget.classList.add("active");
//     });
    
// });
actsid.forEach(el => {
    el.addEventListener("click",(e) => {
        actsid.forEach(el => {
            el.classList.remove("active");
        });
        
        e.currentTarget.classList.add("active");
    });
    
});
login.forEach(el => {el.onclick = function() {
    account.style.cssText = "display : flex;";
    accountForm.style.cssText = "animation-name:popup;animation-duration:.5s";

}});
closeForm.forEach(el => {el.onclick = function() {
    account.style.cssText = " display : none;";
    document.querySelector(".account .n1").style.cssText = " display : none;";
    document.querySelector(".account .n2").style.cssText = " display : none;";
}});
document.querySelector(".n1 .cnct").onclick = function(e) {
    e.preventDefault();
    document.querySelector(".account .n1").style.cssText = " display : none;";
    document.querySelector(".account .n2").style.cssText = " display : flex;";
    document.querySelector(".account .n2 .quest ").style.cssText = " margin-bottom : 40px";
}
document.querySelector(".n2 .cnct").onclick = function(e) {
    e.preventDefault();
    document.querySelector(".account .n2").style.cssText = " display : none; ";
    document.querySelector(".account .n1").style.cssText = " display : flex;";
}
document.querySelectorAll(".closeMini").forEach(el => {el.onclick = function() {
    account.style.cssText = " display : none;";
    document.querySelector(".account .n1").style.cssText = " display : none;";
    document.querySelector(".account .n2").style.cssText = " display : none;";
}});

let act = document.querySelectorAll(".heading li");

act.forEach(el => {
    el.addEventListener("click",(e) => {
        act.forEach(el => {
            el.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
    
});
// end header 
// rating
    // let bigEval = document.querySelector(".bigeval");
    // bigEval.forEach(el => {
    //     el.addEventListener("click",(e) => {
    //         act.forEach(el => {
    //             el.classList.remove("active");
    //         });
    //         e.currentTarget.classList.add("active");
    //     });
        
    // });
    document.querySelectorAll(".bigeval .image:nth-of-type(1)").forEach(el =>{  el.onmouseover = function() {
        document.querySelectorAll(".bigeval .image:nth-of-type(1)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(2)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(3)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(4)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(5)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";});
        
    } });
    
    document.querySelectorAll(".bigeval .image:nth-of-type(2)").forEach(el =>{  el.onmouseover = function() {
        document.querySelectorAll(".bigeval .image:nth-of-type(1)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(2)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(3)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(4)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(5)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";});
        
    } });
    document.querySelectorAll(".bigeval .image:nth-of-type(3)").forEach(el =>{  el.onmouseover = function() {
        document.querySelectorAll(".bigeval .image:nth-of-type(1)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(2)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(3)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(4)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(5)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";});
        
    } });
    document.querySelectorAll(".bigeval .image:nth-of-type(4)").forEach(el =>{  el.onmouseover = function() {
        document.querySelectorAll(".bigeval .image:nth-of-type(1)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(2)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(3)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(4)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(5)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";});
        
    } });
    document.querySelectorAll(".bigeval .image:nth-of-type(5)").forEach(el =>{  el.onmouseover = function() {
        document.querySelectorAll(".bigeval .image:nth-of-type(1)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(2)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(3)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(4)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        document.querySelectorAll(".bigeval .image:nth-of-type(5)").forEach(el =>{  el.style.cssText ="background-image: url('../images/star-64.png') !important;background-size: contain;";});
        
    } });
    document.querySelectorAll(".bigeval").forEach(el =>{  el.onmouseout = function() {
            document.querySelector(".bigeval .image:nth-of-type(1)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
            document.querySelector(".bigeval .image:nth-of-type(2)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
            document.querySelector(".bigeval .image:nth-of-type(3)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
            document.querySelector(".bigeval .image:nth-of-type(4)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
            document.querySelector(".bigeval .image:nth-of-type(5)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
        }});
    
        let clon = document.querySelector(".bigeval").cloneNode(true);
        
        document.querySelector(".ecrirComnt .div").appendChild(clon);
        
        document.querySelector(".annuler").onclick = function() {
            document.querySelector(".over").style.cssText = "display : none;"
            document.querySelector(".div .bigeval .image:nth-of-type(1)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
            document.querySelector(".div .bigeval .image:nth-of-type(2)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
            document.querySelector(".div .bigeval .image:nth-of-type(3)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
            document.querySelector(".div .bigeval .image:nth-of-type(4)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
            document.querySelector(".div .bigeval .image:nth-of-type(5)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
        }
        document.querySelector(".comenter").onclick = function() {
            document.querySelector(".over").style.cssText = "display : flex;"
            document.querySelector(".ecrirComnt").style.cssText = "display : block; animation-name:popup;animation-duration:.5s"
            document.querySelector(".div .bigeval .image:nth-of-type(1)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
            document.querySelector(".div .bigeval .image:nth-of-type(2)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
            document.querySelector(".div .bigeval .image:nth-of-type(3)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
            document.querySelector(".div .bigeval .image:nth-of-type(4)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
            document.querySelector(".div .bigeval .image:nth-of-type(5)").style.cssText ="background-image: url('../images/star_border_black_24dp.svg') !important;background-size: contain;";
        }

        document.querySelectorAll(".bigeval .image").forEach(el => {
            el.onclick = function() {
                document.querySelector(".over").style.cssText = "display : flex;"
                document.querySelector(".ecrirComnt").style.cssText = "display : block; animation-name:popup;animation-duration:.5s"
            }
        });
        

// rating