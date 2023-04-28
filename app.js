window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },
loop: true,

pagination: {
    el: '.swiper-pagination',
    clickable: true
},

navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},});

ScrollReveal({ 
    reset: false, 
    distance: '60px',
    duration: 2500,
    delay: 200
});

ScrollReveal().reveal('.offer .section-title, .who .image', { delay: 200, origin: 'top' });
ScrollReveal().reveal('.testi', { delay: 100, origin: 'top', interval: 200 });
ScrollReveal().reveal('.card, .facility .image, .table-btn', { delay: 200, origin: 'right', interval: 200});
ScrollReveal().reveal('.text-box', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.daycare img, .daycare .info, table, .table-section h2, #table-section h2', { delay: 200, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.section-title, .facility .section-title, .facility .info, .testimonials .section-title, .testimonials .subtitle, .daycare .section-title, .table-sec-title',
                         { delay: 200, origin: 'left' });