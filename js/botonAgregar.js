
const boton1 = document.querySelector('#agregarArtefacto');
const boton2 = document.querySelector('#agregarIluminacion');
const boton3 = document.querySelector('#agregarCalefaccion');
const boton4 = document.querySelector('#agregarRefrigeracion');
const boton5 = document.querySelector('#agregarTrasladosCasa');
const boton6 = document.querySelector('#agregarTrasladosLaborales');

function mensajito() {
    return Swal.fire({
        title: 'Estamos trabajando',
        text: 'Proximamente estara habilitada esta sección',
        icon: 'warning',
        showClass: { 
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    })
};

//console.log(boton1);
//console.log(boton2);
//console.log(boton3);
//console.log(boton4);
//console.log(boton5);
//console.log(boton6);

boton2.onclick = () => {
    mensajito ();
}

boton3.onclick = () => {
    mensajito ();    
}

boton4.onclick = () => {
    mensajito ();    
}

boton5.onclick = () => {
    mensajito ();   
}

boton6.onclick = () => {
    mensajito ();   
}

boton1.onclick = () => {

}