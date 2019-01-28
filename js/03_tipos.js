let x=120 // es number
let y='20' //es string
console.log(x-y)
console.log(x+y) // esto hace un casting raro ya que prevalece la concatenacion sobre la suma hecho que en resta no ocurre se arreglaria forzando el casting
console.log(x+Number(y))
console.log(x + +y) // esto arreglaria el casting
console.log(typeof y)
// esto es lo que se llama casting al hacer la operacion ha cambiado la variable y para ejecutarlo. pero la variable y sigue siendo y
// si se genera una indeterminacion matematica devuelve NaN o infinity
console.log(x/0) // devuelve infinity console.log(x-'pepe') daria NaN

//conceptos de casting booleanos
if(y == 20){ // si le metemos el simbolo de igualdad === daría error porque no es completamente identico
    console.log('Ok')
}else{
    console.log('Error')
}

//Truly
//Falsy: false, undefined, null, 0, '', NaN
y=undefined 
if(y){ // aki hace un casting a false cualquier valor falsy, cualquier otro valor distinto de los falsy castearia a Ok
    console.log('Ok')
}else{
    console.log('Error')
}

//Formas del tipo string
let texto1 = "Soy un texto" // este se considera una mala práctica las dobles se dejan para html
console.log(texto1)
let texto2 = 'Soy otro texto'
console.log(texto2)
// es6 (ecma script) aparece un nuevo formato los template string 
let name = 'pepe'
let texto3 = `Texto comillas inclinadas
    y mantengo el formato pudiendo meter variables ${name}` // esto no funcionaria con el resto de comillas
console.log(texto3)

//operadores ternarios 
let isOk=true
let msj=isOk ? 'todo Ok':'Error' // si se cumple coje lo primero si no coge lo segundo separado con :
console.log(msj)

msj=!isOk ? 'todo Ok':'Error' // si se cumple coje lo primero si no coge lo segundo separado con :
console.log(msj)
