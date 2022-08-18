//------------DECLARACION DE CONSTANTES, VARIABLES Y CLASSES---------------

const casas = []


function generaId(){
    return parseInt(Math.random() * 10000)//fnc p/generar id random


}

class Casa {
    constructor(id, m2, ambientes, precio, para, estado){
        this.id = id
        this.m2 = m2
        this.ambientes = ambientes
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