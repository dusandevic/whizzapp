// JavaScript Document
$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
    defaultPageTransition: 'fade',
  });    
  	$.mobile.page.prototype.options.addBackBtn = true;
	$.mobile.buttonMarkup.hoverDelay = 50;
});

