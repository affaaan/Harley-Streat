(function ($) {
    ("use strict");

     /*-- recent project slider --*/
     var reviewSlider = $(".reviews-slider");
     if (reviewSlider.length) {
         $('.reviews-slider').slick({
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true,
             autoplay: true,
             arrows: true,
             fade: false,
             autoplaySpeed: 3000,
             responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
              ]
         });
     }
     /*-- recent project slider --*/
     var treatmentresultSlider = $(".treatment-result-slider");
     if (treatmentresultSlider.length) {
         $('.treatment-result-slider').slick({
             slidesToShow: 2,
             slidesToScroll: 1,
             infinite: true,
             autoplay: true,
             arrows: true,
             fade: false,
             autoplaySpeed: 3000,
             responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  }
                },
              ]
         });
     }

   


    

})(jQuery);