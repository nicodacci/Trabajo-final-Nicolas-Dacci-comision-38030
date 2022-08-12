//----------------CONEXION CON EL HTML----------------------

const botonComprar = document.querySelector("#comprar")//me conecto con el boton comprar con querySelector mediante el id comprar
const botonAlquilar = document.querySelector("#alquilar")
const botonSubirPublicacion = document.querySelector("#subirPublicacion")
const botonQuitarPublicacion = document.querySelector("#quitarPublicacion")


//-----------------------FUNCIONES BOTONES---------------------------------

botonComprar.addEventListener("click", mostrarComprar)
botonAlquilar.addEventListener("click", mostrarAlquilar)
botonSubirPublicacion.addEventListener("click", subirPublicacion)
botonQuitarPublicacion.addEventListener("click", quitarPublicacion)