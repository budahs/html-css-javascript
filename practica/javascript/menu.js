export function setMenu() {
    let aMenuItems = document.querySelectorAll("nav.navigation a")
    let aSections = document.querySelectorAll("section")
    let oOffsets = []
    //console.log(aMenuItems)
    //console.log(aSections)
    prepararNavegacion()
    window.addEventListener('scroll', changeMenuStyle)


    function prepararNavegacion() {
        aSections.forEach(
            (item) => oOffsets['#'+item.id] = item.offsetTop
        )
        //console.log(oOffsets)    
    }

    function changeMenuStyle() {
        let pageOffset = window.pageYOffset
        //console.log(pageOffset,' var que muestra la cantidad de scroll realizado en y')
        let menuItem = 0
        if (pageOffset >=  oOffsets['#home'] && pageOffset < oOffsets['#who']) {
            menuItem = 0
        } else if (pageOffset >= oOffsets['#who'] && pageOffset < oOffsets['#knowledge']) {
             menuItem = 1
        } else if (pageOffset >= oOffsets['#knowledge'] && pageOffset < oOffsets['#exp']) {
            menuItem = 2
        } else if (pageOffset >= oOffsets['#exp'] && pageOffset < oOffsets['#me']) {
            menuItem = 3
        }else if (pageOffset >= oOffsets['#me'] && pageOffset < oOffsets['#contact']) {
            menuItem = 4
        } else {
            menuItem = 5
        }
        
        aMenuItems.forEach(
            (item) =>{
                item.parentElement.classList.remove('active')
                item.parentElement.removeAttribute('class')                
            } 
        )
        aMenuItems[menuItem].parentElement.classList.add('active')
    }
}