function app(){
    const btnSaludar = document.querySelector("#btnSaludar")
    const btnDespedir = document.querySelector("#btnDespedir")
    const output = document.querySelector("#output")
    btnSaludar.addEventListener('click',saludar)
    btnDespedir.addEventListener('click',saludar)
    // btnDespedir.addEventListener('click',despedir)
    /* function saludar(){
        let msg ='<p>Hola desde una funcion</p>'
        output.innerHTML = msg
        console.clear()
        console.log(msg)
    }
    function despedir(){
        let msg = '<p>adios</p>'
        output.innerHTML = msg
        console.clear()
        console.log(msg)
    } */
    function saludar(oEv){
        let msg
        switch (this.id) {
            case 'btnSaludar':
                msg = '<p>Hola desde una funcion</p>'
                break;
            case 'btnDespedir':
                msg = '<p>adios</p>'
                break;
        
            default:
                break;
        }
        console.clear()
        output.innerHTML = msg
        console.dir(oEv.target.id)
        console.dir(this.id)
    }
}
document.addEventListener('DOMContentLoaded',app)