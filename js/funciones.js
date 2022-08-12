//------------------------FUNCIONES--------------------------

function mostrarComprar(){

    const titulo = document.querySelector("#titulo")//me conecto con el tag h2
    const cuerpo = document.querySelector("#cuerpo")//me conecto con el body mediante el id cuerpo

    titulo.innerHTML = "Casas para COMPRAR"

    cuerpo.innerHTML = `<tbody></tbody>`//limpio la tabla del body antes de usarla por si habia algo mostrandose
    
    casas.forEach(casa => {
        if (casa.para === 'COMPRAR' ){
        cuerpo.innerHTML += `<tr>
                                <td>${casa.id}</td>
                                <td>${casa.supCubierta}</td>
                                <td>${casa.cantAmbientes}</td>
                                <td>${casa.precio}</td>
                                <td>${casa.estado}</td>
                            </tr>`
        }
    
    })
}


function mostrarAlquilar(){

    const titulo = document.querySelector("#titulo")
    const cuerpo = document.getElementById("cuerpo")

    titulo.innerHTML = "Casas para ALQUILAR"
    
    cuerpo.innerHTML = `<tbody></tbody>`

    casas.forEach(casa => {
        if (casa.para === 'ALQUILAR' ){
        cuerpo.innerHTML += `<tr>
                                <td>${casa.id}</td>
                                <td>${casa.supCubierta}</td>
                                <td>${casa.cantAmbientes}</td>
                                <td>${casa.precio}</td>
                                <td>${casa.estado}</td>
                            </tr>`
        }
    
    })
}


function subirPublicacion(){
    
    const id = generaId()
    const supCubierta = parseInt(prompt("Ingrese la superficie cubierta en m2"))
    const cantAmbientes = parseInt(prompt("Ingrese la cantidad de ambientes"))
    const precio = parseInt(prompt("Ingrese el precio"))
    const para = prompt("Ingrese para ALQUILAR o COMPRAR").toUpperCase()

    casas.push(new Casa(id, supCubierta, cantAmbientes, precio, para))

    
}


function quitarPublicacion(){

    let idIngresado

    //validacion de ingreso
    do{         

        idIngresado = parseInt(prompt("ingrese el id"))

    } while (idIngresado > 9999 || idIngresado < 0 || isNaN(idIngresado) == true)
   


    casas.forEach(casa => {     //recorro el array

            let indice = casas.indexOf(casa)    //obtengo el índice

            if (casa.id == idIngresado){

                casas.splice(indice,1)  //uso el indice p/quitar elelemento

            alert(`la publicacion con id ${casa.id} ha sido quitada con éxito`)
            }
    })
    console.table(casas)    //muestro que se quitó o no
}





