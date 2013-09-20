// JavaScript Document
$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
    defaultPageTransition: 'slide',
  });    
  	$.mobile.page.prototype.options.addBackBtn = true;
	
	$(function(){
	  var mySwiper = $('.swiper-container').swiper({
		//Your options here:
		mode:'horizontal',
		loop: true,
		calculateHeight: true,
		slidesPerView: 3,
		freeMode: false,
		resizeReInit: true,
		
		tdFlow: {
			rotate : 0,
			stretch :0,
			depth: 150,
			modifier : 1,
			shadows : true
    	}	
		});
	})
});

