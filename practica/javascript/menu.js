export function setMenu() {
    let aMenuItems = document.querySelectorAll('nav.navigation a')
    let aSections = document.querySelectorAll('section')
    let progressBars = document.querySelectorAll('.progress')
    let oOffsets = []
    //console.log(aMenuItems)
    //console.log(aSections)
    //console.log(progressBars)
    function prepararNavegacion() {
        aSections.forEach(
            (item) => oOffsets['#'+item.id] = item.offsetTop
        )
        //console.log(oOffsets)    
    }
    prepararNavegacion()

    function changeStyleByScroll() {
        let pageOffset = window.pageYOffset
        //console.log(pageOffset,' var que muestra la cantidad de scroll realizado en y')
        let iamNow=null;
        aSections.forEach(
            (item) => {                
                if(pageOffset + 50 >= item.offsetTop)iamNow = item;
                return iamNow;
            }
        )
        let iamNowID = `#${iamNow.id}`;
        //console.log(iamNowID);
        aMenuItems.forEach(
            (item) =>{
                //console.log(item.getAttribute('href'))
                if(iamNowID !== item.getAttribute('href')){
                    item.parentElement.classList.remove('active')
                    //item.parentElement.removeAttribute('class') 
                }else{
                    item.parentElement.classList.add('active')
                }
                               
            }         
        )
        progressBars.forEach((item) => {
            //console.log(pageOffset + ' pageoffset | elemento ofset ' + item.getBoundingClientRect().top)
            if(item.getBoundingClientRect().top <= window.innerHeight && item.getBoundingClientRect().top > 0){
                let thisWidth = item.dataset;
                //console.log(thisWidth.width)
                item.classList.add('in-view');
                item.style.width = thisWidth.width + '%';
            }
        })
        //aMenuItems[menuItem].parentElement.classList.add('active')
    }
    window.addEventListener('scroll', changeStyleByScroll)
    function anchorLinkHandler(e) {
        const distanceToTop = el => Math.floor(el.getBoundingClientRect().top);
    
        e.preventDefault();
        const targetID = this.getAttribute("href");
        const targetAnchor = document.querySelector(targetID);
        if (!targetAnchor) return;
        const originalTop = distanceToTop(targetAnchor);
    
        window.scrollBy({ top: originalTop, left: 0, behavior: "smooth" });
    
        const checkIfDone = setInterval(function() {
            const atBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 2;
            if (distanceToTop(targetAnchor) === 0 || atBottom) {
                targetAnchor.tabIndex = "-1";
                targetAnchor.focus();
                window.history.pushState("", "", targetID);
                clearInterval(checkIfDone);
            }
        }, 100);
    }
    
    const linksToAnchors = document.querySelectorAll('a[href^="#"]');
    
    linksToAnchors.forEach(each => (each.onclick = anchorLinkHandler));
   
    
}