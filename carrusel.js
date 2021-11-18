var arrayImagenes = ["img/principal/img1.jpg" ,"img/principal/img2.jpg", "img/principal/img3.jpg" ]

var imagenActual= 0;

var temporizador;
temporizador = setInterval(cambiarImagen, 3000)

document.getElementById("anterior").addEventListener("click", cambiarImagen);
document.getElementById("siguiente").addEventListener("click", cambiarImagen);
document.getElementById('imagenP').addEventListener('mouseover', pararTemporizador);
document.getElementById('imagenP').addEventListener('mouseout', iniciarTemporizador);

function cambiarImagen(){
    var boton = this.id;
    if(boton!=undefined){
        clearInterval(temporizador);
        temporizador=setInterval(cambiarImagen,3000)
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
    document.getElementById('imagenP').src =  imagenAMostrar;
}
function pararTemporizador(){
    clearInterval(temporizador);
}
function iniciarTemporizador(){
    temporizador=setInterval(cambiarImagen, 3000)
}
