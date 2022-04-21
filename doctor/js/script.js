$(document).ready(function(){

	// Плавная прокрутка
	$("#scroll-home, #scroll-about, #scroll-services, #scroll-team, #scroll-contact").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - 70 + "px"
		}, {
			duration: 1000,
			easing: "swing"
		});
		return false;
	});

	// Burger | Mobile menu
	var $hamburger = $(".hamburger");
	$hamburger.on("click", function(e) {
	    $hamburger.toggleClass("is-active");
	    $('#m-nav').toggleClass('m-nav-open');
	});

	// Slider
	$('.slider').slick({
	    infinite: true,
	    arrows : true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    autoplay: true,
	    autoplaySpeed: 5000,
	    prevArrow: '<svg class="prev-arrow"><use xlink:href="#prev"></use></svg>',
	    nextArrow: '<svg class="next-arrow"><use xlink:href="#next"></use></svg>',
	});

	// Slider
	$('.slider-team').slick({
	    infinite: true,
	    arrows : true,
	    slidesToShow: 5,
	    slidesToScroll: 5,
	    prevArrow: '<svg class="prev-arrow"><use xlink:href="#prev"></use></svg>',
	    nextArrow: '<svg class="next-arrow"><use xlink:href="#next"></use></svg>',

	    responsive: [
	    	{
	    	  breakpoint: 1140,
	    	  settings: {
	    	    slidesToShow: 4,
	    	    slidesToScroll: 4,
	    	  }
	    	},
	        {
	          breakpoint: 991,
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 3,
	          }
	        },
	        {
	          breakpoint: 767,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
	      ]
	});

	// Slider
	$('.slider-specialist').slick({
	    infinite: true,
	    arrows : true,
	    slidesToShow: 3,
	    slidesToScroll: 3,
	    prevArrow: '<svg class="prev-arrow"><use xlink:href="#prev"></use></svg>',
	    nextArrow: '<svg class="next-arrow"><use xlink:href="#next"></use></svg>',

	    responsive: [
	        {
	          breakpoint: 767,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	          }
	        },
	        {
	          breakpoint: 480,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
	      ]
	});

});