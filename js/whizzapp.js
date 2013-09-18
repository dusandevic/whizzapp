// JavaScript Document
$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
    defaultPageTransition: 'slide',
  });    
  	$.mobile.page.prototype.options.addBackBtn = true;
});

