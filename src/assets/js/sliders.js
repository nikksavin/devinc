$(document).ready(function() {


    function heroNavInit() {

        let pageMenu = new Swiper('.hero__menu', {
            slidesPerView: 'auto',
            spaceBetween: 30,
            watchSlidesProgress: true,
            loop: false,
            mousewheel: {
                forceToAxis: true,
            },
            hashNavigation: {
                watchState: true,
            },
            slideToClickedSlide: true,
            watchSlidesVisibility: true,
    
            
            // breakpoints: {
            //     1024: {
            //         spaceBetween: 100,
            //     },
    
            //     1440: {
            //         spaceBetween: 150,
            //     }
            // }
        })
    }

    heroNavInit();

})

