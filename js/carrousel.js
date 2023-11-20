$(document).ready(function () {
    $('#userCarousel').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true, 
        autoplaySpeed: 3000, 
  
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 916,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            },

            {
                breakpoint: 350,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })
});