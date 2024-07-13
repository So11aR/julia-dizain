import Swiper from 'swiper/bundle';

// import styles bundle
// import 'swiper/css/bundle';

function swiper() {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 1,
		spaceBetween: 12,

		// If we need pagination

		// If we need pagination


		breakpoints: {
			840: {
				spaceBetween: 24,
			},
		},
	});
}

export default swiper;