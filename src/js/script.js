$('.carousel__inner').slick({
	infinite: true,
	speed: 500,
	adaptiveHeight: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow:
		'<button type="button" class="slick-prev"><img src="icons/left.svg" /></button>',
	nextArrow:
		'<button type="button" class="slick-next"><img src="icons/right.svg" /></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				dots: false,
				arrows: true,
			},
		},
		{
			breakpoint: 991,
			settings: {
				dots: false,
				arrows: true,
			},
		},
		{
			breakpoint: 767,
			settings: {
				dots: false,
				arrows: true,
			},
		},
		{
			breakpoint: 575,
			settings: {
				dots: false,
				arrows: true,
			},
		},
		{
			breakpoint: 321,
			settings: {
				dots: true,
				arrows: false,
			},
		},
	],
})
