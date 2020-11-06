(function ($) {
	"use strict";

    jQuery(document).ready(function($){
       
   /*---------- menu js start---------*/  
       $('.stellarnav').stellarNav({
				theme: 'dark',
				breakpoint: 568,
				position: 'static',
				phoneBtn: false,
				locationBtn: false,
				sticky:false,
				showArrows:true,
				openingSpeed: 500,
				closingDelay: 500,

      });
        
        
    	$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if (scroll >= 80) {
				$(".menu-section").addClass("nav-sticky");
			} else {
				$(".menu-section").removeClass("nav-sticky");
			}
		});
/*---------- menu js End---------*/  
        
        
        $(".themelab-slide-list").owlCarousel({
    		loop:true,
    		dots:true,
            margin:15,
    		nav:true,
    	    autoplay:true,
            smartSpeed: 1000,
            autoplayTimeout:5000,
            navText:["<i Class='fa fa-angle-left'></i>", 
          			"<i Class='fa fa-angle-right'></i>"],
    		responsiveClass: true,
			responsive: {
			  0: {
				items: 1,
			  },
			  480: {
				items: 1,
			  },
			  768: {
				items: 1,
			  },
			  1000: {
				items:1,
			  }
			}

      });
	  
	  
	  $(".Partner-list").owlCarousel({
		loop:true,
		dots:false,
		margin:30,
		nav:false,
		autoplay:true,
		smartSpeed: 1000,
		autoplayTimeout:5000,
		responsiveClass: true,
		responsive: {
		  0: {
			items: 1,
		  },
		  480: {
			items: 3,
		  },
		  768: {
			items:4,
		  },
		  1000: {
			items:5,
		  }
		}

  });
                  
$('.frame').click(function(){
	$('.top').addClass('open');
	$('.message').addClass('pull');
	
});

  var typed = new Typed('.write', {
	strings: [
	  ' থিমল্যাব এ আপনাকে স্বাগত ', 
	  ' Im a blogger', 
	  ' Im a freelancer'
	],
	smartBackspace: true,
	backSpeed: 40,
	typeSpeed: 70,
	loop:true,
});  






	  var $raj = $('.projects').isotope({
		itemSelector: '.item',
		percentPosition: true,
		masonry: {
		  // use outer width of grid-sizer for columnWidth
		  columnWidth: 1
		}
	  })
  
	  $('.themelab-theme-menu ul li').on('click', function(e){
  
		  e.preventDefault();
  
		  var filter = $(this).attr('data-filter');
  
		  $('.themelab-theme-menu ul li').removeClass('active');
		  $(this).addClass('active');
  
		  $raj.isotope({filter: filter});
		
  
	  });
  
  
        
        
		 new WOW().init();

        
        $(window).scroll(function(){
		        if ($(this).scrollTop() > 100) {
		            $('.scrollToTop').fadeIn();
		        } else {
		            $('.scrollToTop').fadeOut();
		        }
		    });

		    //Click event to scroll to top
		    $('.scrollToTop').on('click', function(){
		        $('html, body').animate({scrollTop : 0},800);
		        return false;
		    });
        
        

    });

//
//    jQuery(window).load(function(){
////        jQuery(".page-loader").fadeOut(1000);
//    });


}(jQuery));	