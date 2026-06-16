import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

try {
    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });
} catch (error) {
    console.error("Помилка ініціалізації Swiper:", error);
}


try {
            const swiper = new Swiper(".swiper", {
                loop: true,
                autoplay: {
                    delay: 2000,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }
            });
        } catch (error) {
            console.error("Помилка ініціалізації Swiper:", error);
        }