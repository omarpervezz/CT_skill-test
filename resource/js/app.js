// sticky header
window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
 
    // Select the header element using its "header" tag name
    const header = document.querySelector("header");
    const logo = header.querySelector('#header-logo');
    const isHeaderSticky = header.classList.contains('sticky-header');
 
    // Check if the scroll position is greater than 20 pixels
    if (scroll > 20 && !isHeaderSticky) {
       header.classList.add('sticky-header');
       logo.src = './assets/logo-2.png';
       logo.classList.add('sticky-logo');
    } else if (scroll <= 20 && isHeaderSticky) {
       header.classList.remove('sticky-header');
       logo.src = './assets/header-logo.png';
       logo.classList.remove('sticky-logo');
    }
 });
 
 
 document.querySelectorAll('.nav-link').forEach(function (navLink) {
    navLink.addEventListener('click', function (event) {
       event.preventDefault();
 
       const targetId = this.getAttribute('href').substring(1);
       const targetElement = document.getElementById(targetId);
 
       if (targetElement) {
          const targetOffset = targetElement.offsetTop;
 
          // Smooth scroll
          window.scrollTo({
             top: targetOffset,
             behavior: 'smooth'
          });
       }
    });
 });

 // slick slider functionality
 $(document).ready(function () {
    $('.carousel').slick({
       centerMode: false,
 
       slidesToShow: 2,
       dots: true,
       arrows: false,
       variableWidth: true,
       responsive: [{
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
 

 // tab js
 const mountain_1 = document.getElementById('mountain-1');
 const mountain_2 = document.getElementById('mountain-2');
 const tab_1 = document.getElementById("tab-1");
 const tab_2 = document.getElementById("tab-2");
 
 function switchTab(tabToShow, tabToHide, activeMountain, inactiveMountain) {
    tabToShow.style.display = 'block';
    tabToHide.style.display = 'none';
    activeMountain.classList.add('active');
    inactiveMountain.classList.remove('active');
 }
 
 mountain_1.addEventListener('click', () => {
    switchTab(tab_1, tab_2, mountain_1, mountain_2);
 });
 
 mountain_2.addEventListener('click', () => {
    switchTab(tab_2, tab_1, mountain_2, mountain_1);
 });