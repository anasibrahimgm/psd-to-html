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

	//tabs-section
	$('.tab-switch li').click(function() {
		//add 'selected' class to active div and remove it from other 'li's
		$(this).addClass('selected').siblings().removeClass('selected');

		//hide all divs
		$('.tabs-section .tabs-content > div').hide();
		//window.console.log($(this).data('class'));

		//show div connected to this link
		$('.' + $(this).data('class')).show();
	});
});
