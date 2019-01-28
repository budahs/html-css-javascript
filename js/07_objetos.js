// por norma general creamos objetos con const para evitar que se sobreescriban de forma accidental
// notación JSON - objetos literales
const oPersona = {nombre : 'Pepe', edad : 23}
// esto en realidad es lo que se esta haciendo
/* const oPersona = new Object() */ // esta es la forma de crear un objeto al que luego le añadimos atributos
// los objetos a diferencia de las clases es dinamico y puede aumentar en elemantos que tiene, se puede añadir o quitar elementos sin restricciones
oPersona.altura = 180
console.log(oPersona.nombre)

// para acceder a una propiedad se puede hacer de otra forma tambien. Para casos de creacion de propiedades dinamicos por ejemplo
let propiedad = 'edad'
console.log(oPersona[propiedad])

// una propiedad tambien puede ser un objeto

oPersona.direccion = {calle: 'c/ Pez', numero : 3}
//se pueden tener propiedades de tipo function que ademas permiten el acceso a propiedades propias con this
oPersona.saludar = function (){
    console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años`)
}

console.log(oPersona)
// ejecutar una propiedad que es de tipo function
oPersona.saludar()
// tambien se puede ejecutar desde fuera
const desdeFuera = oPersona.saludar
desdeFuera() // aqui siendo otro ámbito no encuentra el this

// podemos iterar sobre las propiedades de un objeto
for (const key in oPersona) {
    if(oPersona.hasOwnProperty(key)){
        const value = oPersona[key]
        console.log(key, value)
    }    
}

// si hacemos un typeof de una propiedad que es una funcion nos devuelve function no objeto lo que nos ayudaria a hacer algo como excluir las funciones en una muestra de propiedades propias
console.log(typeof oPersona.saludar)
// por lo que podemos hacer lo siguiente y excluir los atributo que sean funcion
for (const key in oPersona) {
    if(oPersona.hasOwnProperty(key) && typeof oPersona[key] != 'function'){
        const value = oPersona[key]
        console.log(key, value)
    }    
}