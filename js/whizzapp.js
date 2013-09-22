// JavaScript Document
$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
    defaultPageTransition: 'none',
  });    
  	$.mobile.page.prototype.options.addBackBtn = true;
	
	$(window).resize();

	$(function(){	  
	  var mySwiper = $('.swiper-container').swiper({
			slidesPerView:2,
			centeredSlides: true,
			loop:true,
			tdFlow: {}	
		});
		
 	
	})	
});

