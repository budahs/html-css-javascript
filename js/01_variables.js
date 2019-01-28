var variable='hola'
console.log(variable, typeof variable)
variable=25
console.log(variable, typeof variable)
variable=true
console.log(variable, typeof variable)
variable=undefined
console.log(variable, typeof variable)
// variables de tipo elemental
variable={nombre:'pepe',edad:23}
console.log(variable, typeof variable)
//esta variable es un objeto no elemental

var x=23 // variable de ámbito globa
function algo(){
    if(true){
        //var x=32 // variable de ámbito local
        let x=32 // let es local dentro de unas llaves sin embargo var no 
    }    
    console.log(x)
}
algo()
console.log(x)