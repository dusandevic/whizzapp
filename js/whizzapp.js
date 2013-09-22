// JavaScript Document
$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
    defaultPageTransition: 'none',
  });    
  	$.mobile.page.prototype.options.addBackBtn = true;
	
	//$(window).resize();

	$(function(){	  
	  
	})	
	
	$(document)
		.bind(
				"pagechange",
				function(event, data) {
					var url = data.absUrl;	
					try{
						if(url.indexOf("#pgMilestones") != -1){
							setTimeout(function() {
								var mySwiper = $('.swiper-container').swiper({
									slidesPerView:2,
									centeredSlides: true,
									loop:true,
									visibilityFullFit: true,
									tdFlow: {}	
								});
							}, 200);							
						}
					}catch(e){
						console.log(e);
					}
				});
});

