// Add an event listener to the window that listens for the "scroll" event
window.addEventListener("scroll", (event) => {
    const scroll = window.scrollY;
  
    // Select the header element using its "header" tag name
    const header = document.querySelector("header");
    const logo = header.querySelector('#header-logo');
  
    // Check if the scroll position is greater than 20 pixels
    if (scroll > 20) {
      header.classList.add('sticky-header');
     logo.src = '../../assets/logo-2.png';
     logo.classList.add('sticky-logo')
    } else {
        
      header.classList.remove("sticky-header");
      logo.src = '../../assets/header-logo.png';
      logo.classList.remove('sticky-logo')

    }
  });



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
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ],
       
    });
  });








const mountain_1 = document.getElementById('mountain-1');
const mountain_2 = document.getElementById('mountain-2');
const tab_1 = document.getElementById("tab-1");
const tab_2 = document.getElementById("tab-2");

mountain_1.addEventListener('click', () => {
    tab_1.style.display = 'block';
    tab_2.style.display = 'none';
    mountain_1.classList.add('active')
    mountain_2.classList.remove('active')

})

mountain_2.addEventListener('click', () => {    
    tab_1.style.display = 'none';
    tab_2.style.display = 'block';
    mountain_1.classList.remove('active')
    mountain_2.classList.add('active')

});

