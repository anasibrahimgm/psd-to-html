$(function(){
	'use strict';
	$(window).scroll(function(){
		/*window.console.log('navbar height ' + $('.navbar').height());
		window.console.log('window scrollTop: ' + $(window).scrollTop());*/
		var navbar = $('.navbar');
		if($(window).scrollTop() >= $('.navbar').height()){
			if(!navbar.hasClass('scrolled')){
				navbar.addClass('scrolled');
			}
		} else {
			navbar.removeClass('scrolled');
		}
	});
});
