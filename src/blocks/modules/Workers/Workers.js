import Swiper from 'swiper';

const workersSlider = new Swiper('.workers__slider',
	{
		loop: false,
		navigation: {
			nextEl: '.workers__btn-next',
			prevEl: '.workers__btn-prev'
		},
		pagination: {
			el: '.workers__dots',
			clickable: true
		},
		simulateTouch: false,
		spaceBetween: 30,
		slidesPerView: 1,
		breakpoints: {
			576: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 3
			},
			992: {
				slidesPerView: 4
			}
		}
	}
);

export { workersSlider };