$(function() {
	$(".navbar-collapse").mmenu({
		wrappers: ["bootstrap4"],
		navbar: {
			title: ""
		},
		"navbars": [
         {
            "position": "top",
            "content": [
               "searchfield"
            ]
         }
      ],
      "searchfield": {
         "panel": true,
         "noResults": "Совпадений не найдено",
         "placeholder": "Поиск по меню",
      }
   });

	// Fancybox

	$("[data-fancybox]").fancybox();

	
	// Mask

	$("input[name='phone']").mask("+7 (999) 999-9999");


	// NAV

	$(".navbar-toggler").on("click", function() {
		$(".navbar-toggler, .navbar").toggleClass("active");
		$("body").toggleClass("nav-opened");
	});

	$(".navbar .close-btn").on("click", function() {
		$(".navbar-toggler, .navbar").removeClass("active");
		$("body").removeClass("nav-opened");
		$(".navbar-collapse").removeClass("show");
	});


	// Dropdown

	var options = [];

	$( '.dropdown-menu .select-option' ).on( 'click', function( event ) {

		var $target = $( event.currentTarget ),
		val = $target.attr( 'data-value' ),
		$inp = $target.find( 'input' ),
		idx;

		if ( ( idx = options.indexOf( val ) ) > -1 ) {
			options.splice( idx, 1 );
			setTimeout( function() { $inp.prop( 'checked', false ) }, 0);
		} else {
			options.push( val );
			setTimeout( function() { $inp.prop( 'checked', true ) }, 0);
		}

		$( event.target ).blur();

		console.log( options );
		return false;
	});

	// Switch viewlist

	var productClass = [];

	$(".view-select .view-option").on("click", function() {
		$(".view-select .view-option").removeClass("active");
		$(this).addClass("active");
		
		$(".products").attr("data-view", $(this).data("view"));
	});

	// Sliders

	$(".promo-slider").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinity: true,
		arrows: true,
		nextArrow: $(".promo .slick-next"),
		prevArrow: $(".promo .slick-prev"),
		dots: true,
		fade: true
	});

	$(".nproducts-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinity: true,
		arrows: true,
		nextArrow: $(".new-products .slick-next"),
		prevArrow: $(".new-products .slick-prev"),
		dots: false,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}]
	});

	$(".spec-products-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		nextArrow: $(".spec-products .slick-next"),
		prevArrow: $(".spec-products .slick-prev"),
		dots: false,
		responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}]
	});


	$('.product-photo').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		nextArrow: '<button type="button" class="slick-next"><svg class="arrow-i arrow-next-i"><use xlink:href="#arrow"></use></svg></button>',
		prevArrow: '<button type="button" class="slick-prev"><svg class="arrow-i arrow-prev-i"><use xlink:href="#arrow"></use></svg></button>',
		dots: false,
		fade: true,
		infinite: true,
		asNavFor: '.product-photo-nav'
	});

	$('.product-photo-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: true,
		asNavFor: '.product-photo',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: true,
		nextArrow: '<button type="button" class="slick-next"><svg class="arrow-i arrow-next-i"><use xlink:href="#arrow"></use></svg></button>',
		prevArrow: '<button type="button" class="slick-prev"><svg class="arrow-i arrow-prev-i"><use xlink:href="#arrow"></use></svg></button>',
		responsive: [
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 3,
  				slidesToScroll: 1,
				vertical: false,
				focusOnSelect: true
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
  				slidesToScroll: 1,
				vertical: false,
				focusOnSelect: true
			}
		}]
	});

	$(".related-slider").slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		arrows: true,
		nextArrow: $(".related-items .slick-next"),
		prevArrow: $(".related-items .slick-prev"),
		dots: false,
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}]
	});


/*--Search form-----------------------*/

	$('.search-mob-btn').on('click', function(e) {
		e.stopPropagation();
		$('.search-mob').toggleClass('in-active').find('.search-form .search-input').focus();
	});

	$(document).on('mouseup', function(e) {
		var search_pc = $('.search-mob');

		if ( !search_pc.is(e.target) && search_pc.has(e.target).length === 0 ) {
			search_pc.removeClass('in-active');
		}
	});

	$(document).on('click', function() {
		if (!$(event.target).closest('.search-mob').length) {
			if ($(".search-mob").is(":visible")) {
				$('.search-mob').removeClass("in-active");
			}
		}
	});

	$('.search .toggle').focusin(function() {
		$(this).addClass('active');
		$('.search .search-form .search').addClass('animate');
	});

	$('.toggle').focusout(function() {
		$(this).removeClass('active').val("");
		$('.search .search-form .search').removeClass('animate');
	});

});


/*--AJAX Form submit--------------------*/

$(document).on('af_complete', function(event,response) {
	var form_id = response.form.parents('.modal').attr('id');
	if (response.success) {
		$('#'+form_id).modal('hide');
		$('#success-modal').modal('show');
	}
});


// load SVG-Sprite to LocalStorage

;( function( window, document ) {
	'use strict';

	var file = 'img/sprite.svg',
	revision = 1;

	if( !document.createElementNS || !document.createElementNS( 'http://www.w3.org/2000/svg', 'svg' ).createSVGRect )
		return true;

	var isLocalStorage = 'localStorage' in window && window[ 'localStorage' ] !== null,
	request,
	data,
	insertIT = function()
	{
		document.body.insertAdjacentHTML( 'afterbegin', data );
	},
	insert = function()
	{
		if( document.body ) insertIT();
		else document.addEventListener( 'DOMContentLoaded', insertIT );
	};

	if( isLocalStorage && localStorage.getItem( 'inlineSVGrev' ) == revision )
	{
		data = localStorage.getItem( 'inlineSVGdata' );
		if( data )
		{
			insert();
			return true;
		}
	}

	try
	{
		request = new XMLHttpRequest();
		request.open( 'GET', file, true );
		request.onload = function()
		{
			if( request.status >= 200 && request.status < 400 )
			{
				data = request.responseText;
				insert();
				if( isLocalStorage )
				{
					localStorage.setItem( 'inlineSVGdata',  data );
					localStorage.setItem( 'inlineSVGrev',   revision );
				}
			}
		}
		request.send();
	}
	catch( e ){}

}( window, document ) );