
$(document).ready(function(){
    $('.carousel').slick({
        centerMode: false,
       
        slidesToShow: 2,
        dots:true,
        arrows:false,
        variableWidth:true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              slidesToShow: 1
            }
          }
        ],
       
    });
  });