const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
    window.addEventListener('scroll',animOnScroll);
    function animOnScroll(){
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animeItemHeight = animItem.offsetHeight;
            const animIteOffset = offset(animItem).top;
            const animstart = 4;
            
            let animItemPoint = window.innerHeight - animeItemHeight / animstart ;
            if (animeItemHeight > window.innerHeight)  {
                animItemPoint = window.innerHeight - window.innerHeight / animstart ;
            }
            if ((pageXOffset > animIteOffset - animItemPoint) && pageXOffset < (animIteOffset + animeItemHeight)) {
                animItem.classList.add("_active")
                setTimeout(() => {
                    afterAnim();
                    setTimeout(() => {
                        afterAnimto();
                    }, 1000);
                }, 800);
                
            }
            else{
                animItem.classList.remove("_active")
            }
            function afterAnim(){
                animItem.classList.add("_afterActive")
            }
            function afterAnimto(){
                animItem.classList.add("_afterActiveto")
            }
        }
    }
    function offset(el){
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return{top: rect.top + scrollTop , left: rect.left + scrollLeft}
    }
    setTimeout(() => {
        animOnScroll();
    }, 400);
}