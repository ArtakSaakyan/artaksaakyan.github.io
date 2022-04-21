$(document).ready(function(){

	// Плавная прокрутка
	$("#scroll-home, #scroll-video, #scroll-destinations, #scroll-booking").click(function() {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - 100 + "px"
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
	$('.slider-places').slick({
	    infinite: true,
	    arrows : true,
	    slidesToShow: 3,
	    slidesToScroll: 3,
	    prevArrow: '<svg class="prev-arrow"><use xlink:href="#prev"></use></svg>',
	    nextArrow: '<svg class="next-arrow"><use xlink:href="#next"></use></svg>',

	    responsive: [
	    	{
    	      breakpoint: 2048,
			  settings: "unslick"
    	    },
	        {
	          breakpoint: 481, // max-width: 480px
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	          }
	        }
	      ]
	});

	$('.slider-features').slick({
	    infinite: true,
	    arrows : true,
	    slidesToShow: 5,
	    slidesToScroll: 5,
	    prevArrow: '<svg class="prev-arrow"><use xlink:href="#prev"></use></svg>',
	    nextArrow: '<svg class="next-arrow"><use xlink:href="#next"></use></svg>',

	    responsive: [
	    	{
    	      breakpoint: 2048,
			  settings: "unslick"
    	    },
	        {
	          breakpoint: 768, // max-width: 767px
	          settings: {
	            slidesToShow: 4,
	            slidesToScroll: 4
	          }
	        },
	        {
	          breakpoint: 568, // max-width: 480px
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 3
	          }
	        },
	        {
	          breakpoint: 481, // max-width: 480px
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	          }
	        }
	      ]
	});

	$('.slider-categories').slick({
	    infinite: true,
	    arrows : true,
	    slidesToShow: 5,
	    slidesToScroll: 5,
	    prevArrow: '<svg class="prev-arrow"><use xlink:href="#prev"></use></svg>',
	    nextArrow: '<svg class="next-arrow"><use xlink:href="#next"></use></svg>',

	    responsive: [
	    	{
    	      breakpoint: 2048,
			  settings: "unslick"
    	    },
	        {
	          breakpoint: 768, // max-width: 767px
	          settings: {
	            slidesToShow: 4,
	            slidesToScroll: 4
	          }
	        },
	        {
	          breakpoint: 568, // max-width: 480px
	          settings: {
	            slidesToShow: 3,
	            slidesToScroll: 3
	          }
	        },
	        {
	          breakpoint: 481, // max-width: 480px
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	          }
	        }
	      ]
	});

	$('.slider-expert').slick({
	    infinite: true,
	    arrows : true,
	    slidesToShow: 3,
	    slidesToScroll: 3,
	    prevArrow: '<svg class="prev-arrow"><use xlink:href="#prev"></use></svg>',
	    nextArrow: '<svg class="next-arrow"><use xlink:href="#next"></use></svg>',

	    responsive: [
	    	{
    	      breakpoint: 2048,
			  settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1
			  }
    	    }
	      ]
	});
});