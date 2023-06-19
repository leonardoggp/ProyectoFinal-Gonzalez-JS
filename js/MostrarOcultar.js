const botonMenu1 = document.querySelector('#menu1');
const botonMenu2 = document.querySelector('#menu2');
const botonMenu3 = document.querySelector('#menu3');
const botonMenu4 = document.querySelector('#menu4');

const sec1= document.querySelector("#sec1");
const sec2= document.querySelector("#sec2");
const sec3= document.querySelector("#sec3");
const sec4= document.querySelector("#sec4");

botonMenu1.onclick = () => {
    if (sec1.classList.contains("mostrar")){
        // console.log("Activo")
    } else {
        sec1.classList.remove("ocultar");
        sec1.classList.add("mostrar");
        // console.log("no");
    };
    if (sec2.classList.contains("mostrar")){
        sec2.classList.remove("mostrar");
        sec2.classList.add("ocultar");
    }; 
    if (sec3.classList.contains("mostrar")){
        sec3.classList.remove("mostrar");
        sec3.classList.add("ocultar");
    }; 
    if (sec4.classList.contains("mostrar")){
        sec4.classList.remove("mostrar");
        sec4.classList.add("ocultar");
    };
}

botonMenu2.onclick = () => {
    if (sec1.classList.contains("mostrar")){
        sec1.classList.remove("mostrar");
        sec1.classList.add("ocultar");
    }
    
    if (sec2.classList.contains("mostrar")){
        // console.log("Activo")
    } else {
        sec2.classList.remove("ocultar");
        sec2.classList.add("mostrar");
        // console.log("no");
    };
    
    if (sec3.classList.contains("mostrar")){
        sec3.classList.remove("mostrar");
        sec3.classList.add("ocultar");
    }; 
    if (sec4.classList.contains("mostrar")){
        sec4.classList.remove("mostrar");
        sec4.classList.add("ocultar");
    };
}

botonMenu3.onclick = () => {
    if (sec1.classList.contains("mostrar")){
        sec1.classList.remove("mostrar");
        sec1.classList.add("ocultar");
    }
    
    if (sec2.classList.contains("mostrar")){
        sec2.classList.remove("mostrar");
        sec2.classList.add("ocultar");
    };
    
    if (sec3.classList.contains("mostrar")){
        //console.log("Activo")
    } else {
        sec3.classList.remove("ocultar");
        sec3.classList.add("mostrar");
        //  console.log("no");
    };
    
    if (sec4.classList.contains("mostrar")){
        sec4.classList.remove("mostrar");
        sec4.classList.add("ocultar");
    };  
}

botonMenu4.onclick = () => {
    if (sec1.classList.contains("mostrar")){
        sec1.classList.remove("mostrar");
        sec1.classList.add("ocultar");
    }
    
    if (sec2.classList.contains("mostrar")){
        sec2.classList.remove("mostrar");
        sec2.classList.add("ocultar");
    };
    
    if (sec4.classList.contains("mostrar")){
        //console.log("Activo")
    } else {
        sec4.classList.remove("ocultar");
        sec4.classList.add("mostrar");
        //   console.log("no");
    };
    
    if (sec3.classList.contains("mostrar")){
        sec3.classList.remove("mostrar");
        sec3.classList.add("ocultar");
    };   
}