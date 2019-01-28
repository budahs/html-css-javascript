// por ejemplo si quiero crear muchos tipos de objetos personas creamos pues una funcion constructora estas funciones se suelen poner en mayusculas la primera letra "pascal case"

/*function Persona(nombre,edad,isSocio){
    this.nombre = nombre
    this.edad = edad
    this.isSocio = isSocio
}*/ // a esto le podemos definir variables por defecto ej.
/* Persona('Pepe'23,true) esto de por si no funcionaría this no adquiriria valor*/
/*function Persona(nombre,edad,isSocio=true){
    this.nombre = nombre
    this.edad = edad
    this.isSocio = isSocio
    this.saludar = function (){
        console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años`)
    }
}*/ // como la funcion saludar se repetiria en cada objeto la podemos meter mejor en el prototipo generando poco ruido
function Persona(nombre,edad,isSocio=true){
    this.nombre = nombre
    this.edad = edad
    this.isSocio = isSocio
}
Persona.prototype.saludar = function (){
    console.log(`Hola soy ${this.nombre}, y tengo ${this.edad} años`)
}
// en general los metodos se meten en el prototipo y las propiedades en el objeto. De esta forma obtenemos el mismo resultado


let p1 = new Persona('Pepe',23,true)
let p2 = new Persona('Luis',25)
// al hacer los consoles nos encontramos que se asigna el valor por defecto en uno y que pertenecen al prototipo aka "a la clase"

//al contrario que las clases se puede incluso meter una variable especifica no estipulada se puede lo que lo diferencia de una clase
p1.altura = 180
console.log(p1)
console.log(p2)

p1.saludar()
p2.saludar()