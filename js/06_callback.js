// Una funcion callback es una funcion que se pasa a otra funcion 
function calcular(a,b,callBack){
    console.log(callBack(a,b))
}
//calcular(10,4,function(a,b){return a+b}) // lo simplificamos con arrow
//calcular(10,4,(a,b) => {return a+b})
calcular(10,4,(a,b) => a + b)
// o podemos pasar una funcion no anonima
const restar = function (a,b){return a-b}
calcular(10,8,restar)