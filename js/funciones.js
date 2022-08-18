//------------------------FUNCIONES--------------------------

function mostrarTodo(){

    titulo.innerHTML = "Casas disponibles"

    tabla.innerHTML = `<tbody></tbody>`//limpio la tabla del body antes de usarla por si habia algo mostrandose
    
    casas.forEach(casa => {
        
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
mostrarTodo()  

function mostrarComprar(){

    titulo.innerHTML = "Casas para COMPRAR"

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


function subirPublicacion(){

    //genero un evento seguimiento a donde va el cursor
    campos.forEach(campo =>{
        campo.addEventListener("focus", ()=>{campo.className = "fondo-verde"})
        campo.addEventListener("blur", ()=>{campo.className = ""})
        
    })

    //cambio el titulo
    titulo.innerHTML = "Complete los campos para subir su publicación"
    
    //Quito la tabla de la escena si es que estan visibles
    tabla.innerHTML = `<tbody></tbody>`

    id.value = generaId()   //genero el id automatico
    m2.focus()              //pongo el cursor en el primer campo
}


function cargar(){

    casas.push(new Casa(id.value, m2.value, ambientes.value, precio.value, para.value))

    id.value = ""       //limpio despues de cargar
    m2.value = ""           
    ambientes.value = "" 
    precio.value = ""
    para.value = ""

    titulo.innerHTML = ""

    mostrarTodo()   //llamo a la fcn para ver que se cargó
}



function quitarPublicacion(){

    titulo.innerHTML = "Ingrese el id de la publicación a quitar"
   
    id.className = "fondo-verde"
    id.focus()

}


function quitar(){

    let idIngresado = id.value

    casas.forEach(casa => {     //recorro el array

        let indice = casas.indexOf(casa)    //obtengo el índice

        if (casa.id == idIngresado){

            casas.splice(indice,1)  //uso el indice p/quitar elelemento
        }
        })
    mostrarTodo()
    id.value = ""
}



