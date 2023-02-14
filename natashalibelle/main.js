jQuery(document).ready(function ($) {
	let owl = $(".owl-carousel");
	owl.owlCarousel({
    nav: true,
    navText: [`<button type="button" role="presentation" class="owl-prev">
                  <i class="svg left colored_theme_hover_text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6.969" viewBox="0 0 12 6.969">
                      <path id="Rounded_Rectangle_702_copy_24" data-name="Rounded Rectangle 702 copy 24" class="cls-1" d="M361.691,401.707a1,1,0,0,1-1.414,0L356,397.416l-4.306,4.291a1,1,0,0,1-1.414,0,0.991,0.991,0,0,1,0-1.406l5.016-5a1.006,1.006,0,0,1,1.415,0l4.984,5A0.989,0.989,0,0,1,361.691,401.707Z" transform="translate(-350 -395.031)"></path>
                    </svg>
                  </i>
                </button>`,
                `<button type="button" role="presentation" class="owl-next">
                  <i class="svg right colored_theme_hover_text">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="6.969" viewBox="0 0 12 6.969">
                      <path id="Rounded_Rectangle_702_copy_24" data-name="Rounded Rectangle 702 copy 24" class="cls-1" d="M361.691,401.707a1,1,0,0,1-1.414,0L356,397.416l-4.306,4.291a1,1,0,0,1-1.414,0,0.991,0.991,0,0,1,0-1.406l5.016-5a1.006,1.006,0,0,1,1.415,0l4.984,5A0.989,0.989,0,0,1,361.691,401.707Z" transform="translate(-350 -395.031)"></path>
                    </svg>
                  </i>
                </button>`],
		loop: true,
    margin: -2,
		responsive: {
			0: {
				items: 2
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			}
		}
	})
})