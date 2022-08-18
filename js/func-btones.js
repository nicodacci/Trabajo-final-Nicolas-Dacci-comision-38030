//----------------CONEXION CON EL HTML----------------------

const titulo = document.querySelector("#titulo")
const tabla = document.getElementById("tabla")
const campos = document.querySelectorAll("input")
//--------------------------------------------------------------

//me conecto con los botones superiores con querySelector mediante el id
const botonMostrarTodo = document.querySelector("#mostrarTodo")
const botonComprar = document.querySelector("#comprar")
const botonAlquilar = document.querySelector("#alquilar")

const botonSubirPublicacion = document.querySelector("#subirPublicacion")
const botonQuitarPublicacion = document.querySelector("#quitarPublicacion")

//---------------------------------------------------------------

//me conecto con los input de ingreso de datos
const id = document.querySelector("#id")
const m2 = document.querySelector("#m2")
const ambientes = document.querySelector("#ambientes")
const precio = document.querySelector("#precio")
const para = document.querySelector("#para")



//const campos = document.querySelectorAll("input")
const btncargar = document.querySelector("#cargar")
const btnquitar = document.querySelector("#quitar")


//-----------------------FUNCIONES BOTONES---------------------------------

botonMostrarTodo.addEventListener("click", mostrarTodo)
botonComprar.addEventListener("click", mostrarComprar)
botonAlquilar.addEventListener("click", mostrarAlquilar)
botonSubirPublicacion.addEventListener("click", subirPublicacion)
botonQuitarPublicacion.addEventListener("click", quitarPublicacion)
btncargar.addEventListener("click", cargar)
btnquitar.addEventListener("click", quitar)