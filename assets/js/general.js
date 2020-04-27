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
        // Menu
        {
            // DropDown
            {
                $('.lang-btn').on('click', function(event) {
                    event.preventDefault();
                    $(this).next('ul').fadeToggle(500);
                    if ($('.lang-list').css('display') == 'block') $('.lang-list').css('display', 'flex');
                });
                $('.lang-list > li').on('click', function(event){
                    event.preventDefault();
                    let text = $('.lang-btn').text();
                    $('.lang-btn').text($(this).text());
                    $(this).text(text);
                    $('.lang-list').fadeOut(250);
                })
            }
            // Menu active
            {
                $('.navbar-container > li > a').on('click', function(event) {
                    // $('.navbar-container > li > a').not($(this)).removeClass('active');
                    if(!$(this).hasClass('active')){
                        $(this).addClass('active');
                    }
                    if (this.hash !== "") {
                        event.preventDefault();
                        var hash = this.hash;
                        
                        $('html, body').animate({
                            scrollTop: ($(hash).offset().top - $('.navbar-brand').outerHeight())
                        }, 800);

                    }
                    if($(window).width() < 1200){
                        $('.navbar-collapse-btn').removeClass('active');
                        $('.navbar-container').slideUp(500);
                    } 
                });

                $('.navbar-collapse-btn').on('click', function(event) {
                    event.preventDefault();
                    $(this).toggleClass('active');
                    $('.navbar-container').slideToggle(500);
                });
            }

            $(window).resize(function(event) {
                if($(window).width() >= 1200){
                    console.log('ok')
                    $('.navbar-collapse-btn').removeClass('active');
                    $('.navbar-container').removeAttr('style');
                }
            });

            // Cache selectors
            var lastId,
                topMenu = $(".navbar-container"),
                topMenuHeight = topMenu.outerHeight()+15,
                // All list items
                menuItems = topMenu.find("a"),
                // Anchors corresponding to menu items
                scrollItems = menuItems.map(function(){
                  var item = $($(this).attr("href"));
                  if (item.length) { return item; }
                });

                // Bind to scroll
                $(window).scroll(function(){
                   // Get container scroll position
                   var fromTop = $(this).scrollTop()+topMenuHeight;
                   
                   // Get id of current scroll item
                   var cur = scrollItems.map(function(){
                     if ($(this).offset().top < fromTop)
                       return this;
                   });
                   // Get the id of the current element
                   cur = cur[cur.length-1];
                   var id = cur && cur.length ? cur[0].id : "";
                   
                   if (lastId !== id) {
                        lastId = id;
                       
                        menuItems.removeClass("active").parent('li').next('li').children('a').filter("[href='#"+id+"']").addClass("active");
                        if(id == 'th-home') menuItems.filter("[href='#"+id+"']").addClass('active')
                   }                   
                });
        }
    });
});