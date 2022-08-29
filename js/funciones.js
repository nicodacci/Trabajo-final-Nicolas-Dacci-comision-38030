//------------------------Inicio app FUNCIONES--------------------------
//El array donde almaceno todo fue declarado como const para protejerlo
//Traigo todo del localStorage y lo pusheo hacia el array principal
//Esta funcion se ejecuta solo al refrescar la pagina

function traerTodoDeLS(){
    const casasLS = JSON.parse(localStorage.getItem("casas"))
    
    casasLS.forEach(casaLC => {
        
        casas.push(casaLC)
        
    })
}
traerTodoDeLS()


//Muestro todo lo que hay disponible en el html
function mostrarTodo(){

    titulo.innerHTML = "Casas disponibles"
    
    tabla.innerHTML = `<tbody></tbody>` //limpio la tabla del body antes
                                        //de usarla por si habia algo mostrandose, ya q a veces esta fcn
                                        //es llamada en un proceso intermedio
    
    recuperarDeLS() //llamo a ésta funcion para que si hay un nuevo
                    //elemento
                    //o se quito alguno, hace una validacion q no permite
                    //q se repita el item mostrado en el dom

    casas.forEach(casa => { //recorro el array principal y lo muestro en
                            //el dom
        
        tabla.innerHTML += `<tr>
                                <td>${casa.id}</td>
                                <td>${casa.m2}</td>
                                <td>${casa.ambientes}</td>
                                <td>${casa.precio}</td>
                                <td>${casa.para}</td>
                                <td>${casa.estado}</td>
                            </tr>`
    })
}  

mostrarTodo()  //se va a ejecutar siempre q recargue la pagina

//-----------------FUNCIONES PRINCIPALES-----------------------------------

function mostrarComprar(){

    titulo.innerHTML = "Casas para COMPRAR"//adecuo el titulo

    tabla.innerHTML = `<tbody></tbody>`//limpio la tabla del body antes de usarla por si habia algo mostrandose
    
    casas.forEach(casa => {
        if (casa.para === 'COMPRAR' ){
        tabla.innerHTML += `<tr>
                                <td>${casa.id}</td>
                                <td>${casa.m2}</td>
                                <td>${casa.ambientes}</td>
                                <td>${casa.precio}</td>
                                <td>${casa.para}</td>
                                <td>${casa.estado}</td>
                            </tr>`
        }
    
    })
}


function mostrarAlquilar(){

    titulo.innerHTML = "Casas para ALQUILAR"
    
    tabla.innerHTML = `<tbody></tbody>`

    casas.forEach(casa => {
        if (casa.para === 'ALQUILAR' ){
        tabla.innerHTML += `<tr>
                                <td>${casa.id}</td>
                                <td>${casa.m2}</td>
                                <td>${casa.ambientes}</td>
                                <td>${casa.precio}</td>
                                <td>${casa.para}</td>
                                <td>${casa.estado}</td>
                            </tr>`
        }
    })
}

//funcion para habilitar y setear la subida de informacion
function subirPublicacion(){

    //genero un evento de seguimiento con color a donde va el cursor
    camposInput.forEach(campo =>{
        campo.addEventListener("focus", ()=>{campo.className = "fondo-verde"})
        campo.addEventListener("blur", ()=>{campo.className = ""})   
    })

    //cambio el titulo
    titulo.innerHTML = "Complete los campos para subir su publicación"
   
    id.value = generaId()   //genero el id automatico
    m2.focus()              //pongo el cursor en el primer campo
}


//arrow fnc para validar campos, uso de operador avanzado &&
const formularioCompleto = ()=>{
    return (m2.value > 0 && ambientes.value > 0 && precio.value > 0 && para.value !== "") ? true : false
}

//funcion para crear el objeto y guardarlo en localStorage
//vinculada al boton cargar
function cargar(){
    
    if( formularioCompleto() === true ){
    //utilizo el metodo push y creo un nuevo objeto con la clase cosntructora
        casas.push(new Casa(id.value, m2.value, ambientes.value, precio.value, para.value))
    
        id.value = ""       //limpio despues de cargar
        m2.value = ""           
        ambientes.value = "" 
        precio.value = ""
        para.value = ""

        subirLS()
        //guardo en LS
        
    } else{                             //uso operador logico AND &&
        m2.value === "" && m2.focus()   //coloco el cursor en el campo
        ambientes.value === "" && ambientes.focus() //que falte completar
        precio.value === "" && precio.focus()
        para.value === "" && para.focus()

        alert("Completa todos los valores")
        }

    
    mostrarTodo()   //llamo a la fcn para ver que se cargó
}


//seteo la funcion para realizar la operacion
function quitarPublicacion(){

    mostrarTodo()
    titulo.innerHTML = "Ingrese el id de la publicación a quitar"
    id.value = ""
    id.className = "fondo-verde"
    id.focus()

}

//funcion vinculada al boton quitar
function quitar(){

    let idIngresado = id.value
    
    id.focus()
    
    casas.forEach(casa => {     //recorro el array

        let indice = casas.indexOf(casa)    //obtengo el índice

        if (casa.id == idIngresado){

            casas.splice(indice,1)  //uso el indice p/quitar elelemento 
        }
        })

        subirLS()
    
        //subo a LC la nueva cadena de strings con el indice q se quito

    mostrarTodo()   //muestro que se quitó
    id.value = ""   //limpio el campo id
    id.className = ""
}

//funcion q se usa para adicionar un elemento siempre que ya no este
//la uso para q al mostrar todo no haya elementos repetidos en el dom
function recuperarDeLS(){
    //creo un array muleto para bajar lo de LS
    const casasLS = JSON.parse(localStorage.getItem("casas"))
    
    casasLS.forEach(casaLC => {     //recorro el array muleto
        if(casasLS.id != casas.id){ //comparo los id, si son distintos
        casas.push(casaLC)          //los subo al array principal
        }
    })
}

//arrow fcn para subir a local storage
const subirLS = ()=>localStorage.setItem("casas", JSON.stringify(casas))
