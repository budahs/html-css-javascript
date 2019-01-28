export function setMenu() {
    let aMenuItems = document.querySelectorAll("nav.tablet a")
    let aSections = document.querySelectorAll("section")
    let oOffsets = []
    console.log(aMenuItems)
    console.log(aSections)
    prepararNavegacion()
    window.addEventListener('scroll', changeMenuStyle)


    function prepararNavegacion() {
        aSections.forEach(
            (item) => oOffsets['#'+item.id] = item.offsetTop
        )
        console.log(oOffsets)    
    }

    function changeMenuStyle() {
        let pageOffset = window.pageYOffset
        let menuItem = 0
        if (pageOffset >=  oOffsets['#home'] && pageOffset < oOffsets['#about']) {
            menuItem = 0
        } else if (pageOffset >= oOffsets['#about'] && pageOffset < oOffsets['#contact']) {
             menuItem = 1
        } else {
            menuItem = 3
        }
        
        aMenuItems.forEach(
            (item) => item.classList.remove('active')
        )
        aMenuItems[menuItem].classList.add('active')
    }
}