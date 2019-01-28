export function setForm(){
    let form = document.querySelector('#contact')
    form.addEventListener('submit',enviar)
    let oContacto = {}

    function enviar(oEv){
        oEv.preventDefault()       

        oContacto.name = document.querySelector('#name').value
        oContacto.email = document.querySelector('#email').value
        oContacto.phone = document.querySelector('#phone').value
        oContacto.message = document.querySelector('#message').value
        oContacto.condiciones = document.querySelector('#condiciones').checked             

        oContacto.opciones = getRadio(document.querySelectorAll('[name="opciones"]'))
        oContacto.selection = getSelector(document.querySelector('#selection'))

        console.log(oContacto)

        function getRadio(aNodos){
            console.dir(aNodos)
            for (let index = 0; index < aNodos.length; index++) {
                const element = aNodos[index];
                if(element.checked){return DataTransferItem.value}
            }
        }
        function getSelector(nodo){            
            let i = nodo.selectedIndex
            //console.dir(nodo[i].value)
            return nodo[i].value
        }
    }
}