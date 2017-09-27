;(function($){
	"use strict"
	
	$(window).scroll(function(){
		var windowScroll = $(this).scrollTop();

		$('.logo').css({
			'transform' : 'translate(0px, '+ windowScroll/10 +'%)'
		});
		$('.back-book').css({
			'transform' : 'translate(0px, '+ windowScroll/40 +'%)'
		});
		$('.fore-book').css({
			'transform' : 'translate(0px, -'+ windowScroll/80 +'%)'
		});

		if(windowScroll > $('.books').offset().top - ($(window).height() / 1.2)){

			$('.books .product').each(function(i){

				setTimeout(function(){
					$('.books .product').eq(i).addClass('is-showing');
				}, 250 * (i + 1));
				
			});
		}

		if(windowScroll > $('.periscope').offset().top - $(window).height()){
			$('.periscope').css({'background-position' : 'center '+ (windowScroll - $('.periscope').offset().top)  +'px'});

			var opacity = (windowScroll - $('.periscope').offset().top + 400) / (windowScroll / 5);

    		$('.window-tint').css({'opacity': opacity});
		}

		if(windowScroll > $('.posts').offset().top - $(window).height()){
			var offset = Math.min(0, windowScroll - $('.posts').offset().top +$(window).height() - 350);

    	$('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    	$('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});
		}
	});
})(jQuery);