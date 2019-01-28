const x=3.23 // el ámbito es igual que el del let (dentro de llaves)
//x=x*2 // esto da error ya que no se puede asignar variables a constantes
const oDatos={nombre:'Pepe',edad:23}
oDatos.nombre='Jose' // esto se permite aun siendo constante
oDatos.altura=180 //esto si lo permite
//oDatos = 'Juan' // revienta
//oDatos={} // revienta
console.log(oDatos)
