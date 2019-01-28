//let aDatos=[3,4,8,17,'Pepe',true] // [] define array
let aDatos=[3,4,8,17]
console.log(typeof aDatos, aDatos) // es un objeto simplemente no tiene propiedades estan indexadas de forma numerica los elementos pueden ser de cualquier tipo
for (let index = 0; index < aDatos.length; index++) {
    const item = aDatos[index];  
    console.log(`El número es ${item}`)  
}

aDatos.forEach(item => console.log(`El número es ${item}`))


//ejemplos de funciones basadas en callBack a partir de aqui visto en 06_callback.js
let aCuadrados = aDatos.map(item => item * item)
console.log(aCuadrados)

let aPares = aCuadrados.filter(item => !(item % 2)) // esto es una forma de encontrar pares
/* let aPares = aCuadrados.filter(item => (item % 2))  */ // esto sería lo contrario
console.log(aPares)

let total = aDatos.reduce((previo,current) => previo + current) //
console.log(total)
