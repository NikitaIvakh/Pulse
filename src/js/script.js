$(document).ready(function () {
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

	$('ul.catalog__tabs').on(
		'click',
		'li:not(.catalog__tab_active)',
		function () {
			$(this)
				.addClass('catalog__tab_active')
				.siblings()
				.removeClass('catalog__tab_active')
				.closest('div.container')
				.find('div.catalog__content')
				.removeClass('catalog__content_active')
				.eq($(this).index())
				.addClass('catalog__content_active')
		}
	)

	function toggleSlide(item) {
		$(item).each(function (i) {
			$(this).on('click', function (e) {
				e.preventDefault()
				$('.catalog-item__content')
					.eq(i)
					.toggleClass('catalog-item__content_active')
				$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
			})
		})
	}

	toggleSlide('.catalog-item__back')
	toggleSlide('.catalog-item__link')

	// Modal
	$('[data-modal=consulting]').on('click', function () {
		$('.overlay, #consulting').fadeIn('slow')
	})

	$('.modal__close').on('click', function () {
		$('.overlay, #consulting, #order, #thanks').fadeOut('slow')
	})

	$('.button_mini').each(function (i) {
		$(this).on('click', function () {
			$('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text())
			$('.overlay, #order').fadeIn('slow')
		})
	})

	// Validate
	function validateForms(form) {
		$(form).validate({
			rules: {
				name: {
					required: true,
					minlength: 2,
				},
				phone: {
					required: true,
				},
				email: {
					required: true,
					email: true,
				},
			},
			messages: {
				name: {
					required: 'Пожалуйста, введите свое имя',
					minlength: jQuery.validator.format('Введите {0} символа!'),
				},
				phone: {
					required: 'Пожалуйста, введите свой номер телефона',
				},
				email: {
					required: 'Пожалуйста, введите свою почту',
					email: 'Неправильно введен адрес электронной почты',
				},
			},
		})
	}

	validateForms('#consulting-form')
	validateForms('#consulting form')
	validateForms('#order form')

	$('input[name=phone]').mask('+7 (999) 999-99-99')

	// Send form
	$('form').submit(function (e) {
		e.preventDefault()

		if (!$(this).valid()) {
			return
		}

		$.ajax({
			type: 'POST',
			url: 'mailer/smart.php',
			data: $(this).serialize(),
		})
			.done(function () {
				$(this).find('input').val('')
				$('#consulting, #order').fadeOut()
				$('.overlay, #thanks').fadeIn('slow')
				$('form').trigger('reset')
			})
			.fail(function (jqXHR, textStatus, errorThrown) {
				console.error('Error:', textStatus, errorThrown)
			})
	})
})
