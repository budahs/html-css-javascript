class Persona {
    constructor(nombre, edad, isSocio = true) {
        this.nombre = nombre
        this.edad = edad
        this.isSocio = isSocio
        /* this.despedirme = function() {
            console.log('Adios')
        } */
    }

    saludar () {
        console.log(`Hola, soy ${this.nombre}, y tengo ${this.edad} años`)
    }
}

let p1 = new Persona('Pepe', 23)
p1.altura = 180
let p2 = new Persona('Luis', 25)

console.log(p1)
console.log(p2)

p1.saludar()
p2.saludar()

/* p1.despedirme()
p2.despedirme() */

class Alumno extends Persona {
    constructor(nombre, edad, isSocio, curso) {
        super(nombre, edad, isSocio) // con este super le decimos que queremos los valores previos y extendemos con la propiedad deseada 
        this.curso = curso
    }
    saludar() {
        super.saludar() // igualmente aki establecemos que queremos esa funcionalidad y la extendemos (probar a kitar? Si se puede quitar y reescribir la funcion)
        console.log(`Estudio ${this.curso}`)
    }
}

let a1 = new Alumno('Maria', 30, true, 'JavaScript')
console.log(a1)
a1.saludar()