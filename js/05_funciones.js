// la mas tradicional forma de declarar
/*
function sumar(a,b){
    return a+b
}
*/
//podemos asignar parametros por defecto 
function sumar(a=0,b=0){
    return a+b
}// esto soucionaria la ausencia de un segundo valor que daria NaN

//ejecutamos la funcion
console.log(sumar(3,6))
console.log(sumar(7)) // al faltar la segunda devuelve NaN
console.log(sumar(7,8,10)) // aquí ignora el tercero pero se ejecuta

//podemos asignar la funcion a una variable
const restar = function(a=0,b=0){return a - b} // esto se llama función anónima ya que no se le ha asignado ningún nombre
console.log(restar(12,4))

//ES6 : Arrow Functions 
/*const producto = (a,b) => {return a * b}*/
const producto = (a,b) => a * b
console.log(producto(4,6))
