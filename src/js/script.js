const slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	controls: false,
	nav: false,
	navPosition: 'bottom',
	responsive: {
		320: {
			edgePadding: 20,
			gutter: 20,
			items: 1,
			nav: true,
		},
		767: {
			items: 1,
		},
		575: {
			items: 1,
		},
		991: {
			items: 1,
		},
		1200: {
			items: 1,
		},
		1440: {
			items: 1,
		},
		2560: {
			items: 1,
		},
	},
})

document.querySelector('.prev').addEventListener('click', () => {
	slider.goTo('prev')
})

document.querySelector('.next').addEventListener('click', () => {
	slider.goTo('next')
})
