let nombre = 'Pepe'
let edad = 23
let aDatos = []

//si a un Array ponemos aDatos. se ofrecen varios metodos asociados a los arrays. esto tambien puede pasar en los de tipo primitivo nos devuelve metodos que se pueden aplicar a dicha variable de tipo string
// estos metodos se llamana tambien wrapper methods para variables primitivas

console.log(nombre.toUpperCase())
console.log(edad.toExponential(4))

// asi mismo podemos encontrar metodos para los arrays aunque sean objetos. visto en documento 04_arrays.js - aparte de los vistos tenemos metodos como push, slice,splice todo esto esta documentado
aDatos.push(2,3,4,7)
console.log(aDatos)
