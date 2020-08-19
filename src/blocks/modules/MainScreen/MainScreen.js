import Swiper from 'swiper';

const mainSlider = new Swiper('.main-screen__slider',
	{
		loop: true,
		effect: 'fade',
		simulateTouch: false,
		allowTouchMove: false,
		navigation: false,
		pagination: {
			el: '.main-screen__dots',
			clickable: true
		},
		autoplay: {
			delay: 5000
		},
		slidesPerView: 1,
		speed: 1500
	}
);

export { mainSlider };