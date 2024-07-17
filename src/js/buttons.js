document.addEventListener('DOMContentLoaded', () => {
	const buttons = document.querySelectorAll('.carousel__inner ul li button')

	buttons.forEach((button, index) => {
		if (index === 0) {
			button.parentElement.classList.add('active')
		}

		button.addEventListener('click', () => {
			buttons.forEach(btn => btn.parentElement.classList.remove('active'))
			button.parentElement.classList.add('active')
		})
	})
})
