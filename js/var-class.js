//------------DECLARACION DE CONSTANTES, VARIABLES Y CLASSES---------------

const casas = []


function generaId(){
    return parseInt(Math.random() * 10000)//fnc p/generar id random


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