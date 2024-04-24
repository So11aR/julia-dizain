import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';

function swiper() {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		spaceBetween: 12,

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			// dynamicBullets: true,
		},

    navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},

		breakpoints: {
			840: {
				spaceBetween: 24,
			},
		},
	});
}

export default swiper;