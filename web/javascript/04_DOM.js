//en html5 se deja de usar document.getElementById y similares por las que metemos en app()
//usamos console.dir() da mas informacion del nodo que un console.log()
function app(){
    let nodoH1 = document.querySelector('h1') // este devuelve solo el primero
    console.dir(nodoH1) 
    //console.table(nodoH1) // hay varios metodos para console si se quiere ver  
    nodoH1.innerHTML+=' <span>Cambio a machete desde JS</span>' 
   /*  nodoH1.parentNode.classList.remove('titulo')
    nodoH1.parentNode.classList.add('titulo_invertido') */

    setInterval(() => {
        nodoH1.parentNode.classList.toggle('titulo')
        nodoH1.parentNode.classList.toggle('titulo_invertido')
    },2000)

    let nodosP = document.querySelectorAll('p') // este busca todos los nodos que cumplen lo especificado
    console.dir(nodosP)
    // nodosP.forEach(item => item.innerHTML = 'Párrafo borrado')
    let nodoP3 = document.querySelector('#p3')
    // nodoP3.outerHTML = '<blockquote id="p3">Texto citado</blockquote>'
    nodoP3.nextElementSibling.outerHTML = '<blockquote id="p3">Texto citado</blockquote>'
}
document.addEventListener('DOMContentLoaded',app) //DOMContentLoaded es un evento propio solo del documento