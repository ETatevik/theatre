console.clear();
jQuery(function ($) {
    $(document).ready(function () {
        // Actors SLIDER
        {
        	try {
        		let swiper = new Swiper('#actors-slider .swiper-container', {
			      	slidesPerView: 1,
			      	spaceBetween: 30,
			      	pagination: {
			      	  	el: '.swiper-pagination',
			      	  	clickable: true,
			      	},
			      	breakpoints: {
			      		768:{
			      			slidesPerView: 2
			      		},
                        993: {
                            slidesPerView: 3
                        },
                        1200:{
                            slidesPerView: 4
                        }
                    }
			    });
        	} catch(e) {
        		// statements
        		console.log(e);
        	}
        }
    });
});