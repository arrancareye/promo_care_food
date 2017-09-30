'use strict';
window.onload = function() {
    console.log('DOM IS READY...');
    // INITIALIZE SMOOTH SCROLL
    let scroll = new SmoothScroll('a[href*="#"]', {
        // Selectors
        ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
        header: null, // Selector for fixed headers (must be a valid CSS selector)
    
        // Speed & Easing
        speed: 700, // Integer. How fast to complete the scroll in milliseconds
        offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
        easing: 'easeInOutCubic', // Easing pattern to use
        customEasing: function (time) {}, // Function. Custom easing pattern
    
        // Callback API
        before: function () {}, // Callback to run before scroll
        after: function () {
            let textarea = document.querySelector('.textarea');
            textarea.classList.add('boxed');
        } // Callback to run after scroll
    });
    setTimeout(() => {
        let textarea = document.querySelector('.textarea');
        textarea.classList.add('boxed');
    }, 5000);
};