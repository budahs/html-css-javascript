function saludar(){
    // para hacer un proceso asincrono ppodemos usar setTimeout esto se usa para API ya que tienes que esperar a una respuesta
    setTimeout(() => {let user = prompt('Dime tu nombre')
    alert('Hola' + ' ' + user)},2000)
    /* let user = prompt('Dime tu nombre')
    alert('Hola' + ' ' + user) */ // se podria hacer window.alert()
}
function salir(){
    alert('Adios')
    location.assign('https://www.google.com') // location tiene varios metodos igual que window
}