let inputNombreCompletoUsuario=document.getElementById("nombrecompletousuario")
let inoutNumeroDeCedulaUsuario=document.getElementById("numerodecedulausuario")
let inoutCorreoElectronicoUsuario=document.getElementById("correoelectronicousuario")
let botonFormulario=document.getElementById("boton")



botonFormulario.addEventListener("click",function(evento){

    //1. se inicia desactivando el comportamiento por defecto
    evento.preventDefault()

    //2. probamos que el evento se esta escuchando con exito 
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        icon: "success"
      });
})