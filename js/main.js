let swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-buttons__next",
        prevEl: ".swiper-buttons__prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 5,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 6,
            spaceBetween: 64,
        },
    },
});

// Смена заголовка в header
const titles = document.querySelectorAll('.header__second-title');
let currentIndex = 0;

function changeTitle() {
    // Убираем активный класс у текущего заголовка
    titles[currentIndex].classList.remove('header__second-title--active');
    // Увеличиваем индекс для следующего заголовка
    currentIndex = (currentIndex + 1) % titles.length;
    // Добавляем активный класс к следующему заголовку
    titles[currentIndex].classList.add('header__second-title--active');
}
// Меняем заголовок каждые 2 секунды
setInterval(changeTitle, 2000);
