const boton = document.getElementById("boton");
const email = document.getElementById("email");
function datosRecibidos(){
    console.log("successful login");
}

function enviarDatos(){
    boton.addEventListener("click", datosRecibidos);
}
enviarDatos();
