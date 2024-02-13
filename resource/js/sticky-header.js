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
  