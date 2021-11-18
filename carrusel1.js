var arrayImagenes = ["img/potrero/potrero1.jpg" ,"img/potrero/potrero2.jpg", "img/potrero/potrero3.jpg" ]

var imagenActual= 0;

var temporizador;
temporizador = setInterval(cambiarImagen, 3000)

document.getElementById("anterior").addEventListener("click", cambiarImagen);
document.getElementById("siguiente").addEventListener("click", cambiarImagen);

document.getElementById('imagen').addEventListener('mouseover', pararTemporizador);
document.getElementById('imagen').addEventListener('mouseout', iniciarTemporizador);

function cambiarImagen(){
    var boton = this.id;
    if(boton!=undefined){
        clearInterval(temporizador);
        temporizador=setInterval(cambiarImagen,1000)
    }
    if(boton == 'anterior'){
        imagenActual --;
        if(imagenActual < 0){
           imagenActual = arrayImagenes.length -1;
        }
    }else{
        imagenActual ++;
        if(imagenActual == arrayImagenes.length){
            imagenActual = 0;
        }
    }
    var imagenAMostrar = arrayImagenes[imagenActual];
    document.getElementById('imagen').src =  imagenAMostrar;
}
function pararTemporizador(){
    clearInterval(temporizador);
}
function iniciarTemporizador(){
    temporizador=setInterval(cambiarImagen, 3000)
}
