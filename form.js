function validar(){
    
    document.getElementById("errores").innerHTML ="";
    document.getElementById("ingresos").innerHTML ="";
    var nombre = document.getElementById("nombre").value;
    var msj = document.getElementById("mensaje").value;
    var email = document.getElementById("email").value;
    var expresion = /^[a-zA-ZÁ-ÿ\s]{1,48}$/;
    var expresion_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.([a-zA-Z]{2,4})+$/;
    var errores = [];
    if(!expresion.test(nombre)){
        errores.push("El nombre no es valido");
        document.getElementById("nombre").className='error';

    }else{
        document.getElementById("nombre").style.border = " ";
    }
  
    if(!expresion_email.test(email)){
        errores.push("El email no es valido");
        document.getElementById("email").className='error';
    }else{
        document.getElementById("email").style.border = " ";


    }
    if(msj.length < 1){
        errores.push("El mensaje debe no puede estar vacio");
        document.getElementById('mensaje').className ='error';
    } else {
        document.getElementById('mensaje').style.border = " ";
    }

    if(errores.length > 0){
        var cartel = "<ul>";
        for(var i = 0; i < errores.length; i++){
            cartel += "<li>" + errores[i] + "</li>";
        }
        cartel+= "</ul>";
        document.getElementById("errores").innerHTML = cartel;
        return false;
    }
    
    let h = document.getElementById('ingresos-h');
    h.style.display ='block';
    h.style.fontSize ='50px';
    
    let li = document.createElement('li');
    let li1 = document.createElement('li');
    li.innerHTML = "Visitante :" + nombre; 
    li1.innerHTML = "Mensaje : " + msj;
    let lista = document.getElementById ('ingresos');
    lista.appendChild(li);
    lista.appendChild(li1);
    li1.style.fontSize = '20px';
    li1.style.textShadow = 'none';
    li1.style.display = 'inline';
    li1.style.color = 'black';
    
    li.style.fontSize = '20px';
    li.style.textShadow = 'none';
    li.style.float = 'inline';
    li.style.color = 'black';
    lista.style.marginBottom = '200px';
    
    alert("Consulta enviada");
    
    
    return false;     
}


