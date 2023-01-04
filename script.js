function iniciar(){
    username=document.getElementById("Usuario").value;
    passcode=document.getElementById("Contraseña").value;
    localStorage.setItem("Usuario",username);

    if (passcode=="Tiggy119") {
        window.location="salas.html"
    }else{
     document.getElementById("Contraseña").value="contraseña incorrecta =("
        //console.log("hola")
    }
    
}