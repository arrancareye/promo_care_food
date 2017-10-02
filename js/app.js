'use strict';
window.onload = function(event) {
    window.location.hash = "#head";
    setTimeout(()=>{document.body.scrollTop = document.documentElement.scrollTop = 0;    }, 5);
    let iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;    
    this.scroll(0, 50);
    if(iOS) {
        let bh = document.querySelector('body');
        let hb = document.querySelector('html');
        hb.classList.add('hide');
        bh.classList.add('hide');
        let wr = document.querySelector('.wrapper');
        wr.classList.add('hide');
    } else {
        console.log(navigator.userAgent);
    }
    console.log('DOM IS READY...');
    // INITIALIZE SMOOTH SCROLL
    let scroll = new SmoothScroll('a', {
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
        } // Callback to run after scroll
    });
    setTimeout(() => {
        let textarea = document.querySelector('.textarea');
        textarea.classList.add('boxed');
    }, 5000);
    let a = document.querySelector('.cart');
    let b = document.querySelector('.top__right');
    let sn = b.firstChild.nextSibling.nextSibling;
    let c = document.querySelector('.top__left');
    if(window.innerWidth<480) {
        b.insertBefore(a, sn);
    }
    window.addEventListener('resize', function(){
        if(window.innerWidth<480) {
            b.insertBefore(a, sn);
        } else {
            c.appendChild(a);
        }
    });
    let gamecond = document.querySelector('.gamecond');
    let backbutton = document.querySelector('.backbutton');   
    console.log(backbutton); 
    gamecond.addEventListener('click', () => {
        backbutton.style.opacity = 1;
        backbutton.style.top = 90 + '%';
    });
    backbutton.addEventListener('click', (e) => {
        backbutton.style.opacity = 0;
        backbutton.style.top = 100 + '%';
    })
};