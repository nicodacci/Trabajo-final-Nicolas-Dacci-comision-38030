//----------------DECLARACION DE CONSTANTES Y VARIABLES---------------

const casas = []

//--------------------------CLASES CONSTRUCTORAS---------------------

function generaId(){
    return parseInt(Math.random() * 10000)
}

class Casa {
    constructor(id, supCubierta, cantAmbientes, precio, para, estado){
        this.id = id
        this.supCubierta = supCubierta
        this.cantAmbientes = cantAmbientes
        this.precio = precio
        this.para = para
        this.estado = "DISPONIBLE"
        
    }
    vender(){
        const estado = "VENDIDO"
    }
    alquilar(){
        const estado = "ALQUILADO"
    }   
}

//------------CARGA PREVIA AUTOMATICA DE OBJETOS---------------------
//--------------------PARA UTILIZAR LA APP------------------------

function generadorAutomatico(){

    casas.push(new Casa(1234, 110, 5, 135, "ALQUILAR"))
    casas.push(new Casa(5867, 150, 6, 160, "ALQUILAR"))
    casas.push(new Casa(2547,200, 6, 200, "ALQUILAR"))
    
    casas.push(new Casa(7859, 110, 5, 100000, 'COMPRAR'))
    casas.push(new Casa(1235, 150, 6, 130000, 'COMPRAR'))
    casas.push(new Casa(2534, 200, 6, 200000, 'COMPRAR'))
  
}


generadorAutomatico()

//------------------------FUNCIONES--------------------------

function comenzar(){
  
    let menu
   
    do{
        menu = prompt("Bienvenido a Celcius Inmobiliaria, seleccione \n1 Propiedades para COMPRAR\n2 Propiedades para ALQUILAR\n3 SUBIR PUBLICACION\n4 QUITAR PUBLICACION"
        )
    } while(!(menu == '1' || menu == '2' || menu == '3' || menu == '4'))


    switch (menu){
        case '1':
            mostrarComprar()
            
            break
        case '2':
            mostrarAlquilar()
            
            break
        case '3':
            publicar()
            
            break
        case '4':
            quitarPublicacion()

            break
        default:
            console.warn("algo anda mal")
        }            
}   


function mostrarComprar(){
    const resultado = casas.filter(casa => casa.para === 'COMPRAR')
    console.table(resultado)
}


function mostrarAlquilar(){
    const resultado = casas.filter(casa => casa.para === 'ALQUILAR')
    console.table(resultado)
}


function publicar(){

    console.log("la cantidad de casas es "+ casas.length)//es a fines de controlar antes y despues la cantidad en el array

    const id = generaId()
    const supCubierta = parseInt(prompt("Ingrese la superficie cubierta en m2"))
    const cantAmbientes = parseInt(prompt("Ingrese la cantidad de ambientes"))
    const precio = parseInt(prompt("Ingrese el precio"))
    const para = prompt("Ingrese para ALQUILAR o VENDER").toUpperCase()

    casas.push(new Casa(id, supCubierta, cantAmbientes, precio, para))

    console.log("la nueva cantidad de casas es "+ casas.length)
    console.table(casas)//muestro la nueva tabla
}


function quitarPublicacion(){

    alert("Busque en la siguiente lista el id de la publicacion a quitar")

    console.table(casas)//lista para seleccionar un id

    let idIngresado

    do{         //validacion de ingreso

        idIngresado = parseInt(prompt("ingrese el id"))

    } while (idIngresado > 9999 || idIngresado < 0 || isNaN(idIngresado) == true)
   
    casas.forEach(casa => {     //recorro el array

            let indice = casas.indexOf(casa)    //obtengo el índice

            if (casa.id == idIngresado){

                casas.splice(indice,1)  //uso el indice p/quitar elelemento

            alert("la publicacion con id " + casa.id +" ha sido quitada con éxito")
            }
    })
    console.table(casas)    //muestro que se quitó o no
}





