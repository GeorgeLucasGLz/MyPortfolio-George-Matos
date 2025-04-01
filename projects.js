var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    initialSlide: 2,
    speed: 600,
    preventClicks: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    },
    autoplay: {
        delay: 1500, // Primeira transição após 1500ms
        disableOnInteraction: false,
    },
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex);
        },
        slideChange: function () {
            // Ajusta o delay para 2000ms após o primeiro slide
            if (this.activeIndex !== this.realIndex) {
                this.params.autoplay.delay = 2000;
                this.autoplay.start();
            }
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

