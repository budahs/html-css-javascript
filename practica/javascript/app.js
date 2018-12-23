import {setMenu} from '/practica/javascript/menu.js'
//import {setForm} from '/practica/javascript/form.js' // ojo esto de incorporar funciones de forma modular solo funciona en ES6 Node usa @import todavia
function app(){
    setMenu()
    //setForm()
}
document.addEventListener('DOMContentLoaded',app)