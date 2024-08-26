
const galeria1 = document.querySelector('.galeria1');

const galeria2 = document.querySelector('.galeria2');

const galeria3 = document.querySelector('.galeria3');

const galeria4 = document.querySelector('.galeria4');


const galeriason = document.querySelectorAll('.visible');

const galerias = document.querySelectorAll('.glr');



// Botoes

function mostrartudo() {
    galerias.forEach((galeria) => 
        galeria.classList.replace("hidden", "visible"));

    galerias.forEach((galeria) => 
        galeria.classList.add("visivelagora"))

}


function mostrar1() {
    
    if (galeriason.length == 0) {
        galerias.forEach((galeria) => 
            galeria.classList.replace("visible", "hidden"));
    }

    galeria1.classList.add("visivelagora");
    galeria1.classList.replace("hidden", "visible");
  
}


function mostrar2() {

    if (galeriason.length == 0) {
        galerias.forEach((galeria) => 
            galeria.classList.replace("visible", "hidden"));
    }

    galeria2.classList.add("visivelagora");
    galeria2.classList.replace("hidden", "visible");
   
}


function mostrar3() {

    if (galeriason.length == 0) {
        galerias.forEach((galeria) => 
            galeria.classList.replace("visible", "hidden"));
    }

    galeria3.classList.add("visivelagora");
    galeria3.classList.replace("hidden", "visible");
   
}

function mostrar4() {

    if (galeriason.length == 0) {
        galerias.forEach((galeria) => 
            galeria.classList.replace("visible", "hidden"));
    }

    galeria4.classList.add("visivelagora");
    galeria4.classList.replace("hidden", "visible");
   
}
