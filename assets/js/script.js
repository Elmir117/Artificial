document.querySelector('.fa-xmark').addEventListener('click', function () {
    document.querySelector('.curtain-navbar').style.width = "0"
})
document.querySelector('.fa-bars').addEventListener('click', function () {
    document.querySelector('.curtain-navbar').style.width = "100%"
})
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});