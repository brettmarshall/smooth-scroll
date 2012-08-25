/*
* Title: SmoothScroll Plugin
* Description: A simple scrolling plugin that allows you to click an "a" tag and have it go to the id of your choice.
* Author: Brett Marshall
* URL: http://smooth-scroll.brett-marshall.com
* Forum: http://smooth-scroll.brett-marshall.com/forum
* Build: 1.0
* Version: Developement
*/

jQuery(document).ready(function($)	{

	smoothScroll = {
		
		Manual: function(button, landing, speed)	{
			
			
			button.attr('href', '#smoothScroll-landing');
			
			landing = landing || $('html');
			landing.attr('id', 'smoothScroll-landing');
			
			speed = speed || 300;
			
				// when the item is clicked
				button.click(function() {
					// grab the html document and / or the body
					$("html, body").animate({
					// grab the item clicked's href and get the distance between this element
					//and the element it is scrolling to
						scrollTop: $($(this).attr("href")).offset().top + "px"
					}, {
						duration: speed,
						easing: "swing"
					});
					return false;
				});
		}, // end of scroll
		
		  //change here
		
		AutoDetect: function(speed)	{
			
			speed = speed || 300;
			
			var smooth_html = $('html');
			var smooth_body = $('body');
			var smooth_header = $('header');
			var smooth_first_div = $('div').first();
			var smooth_button = $('.smoothScroll-trigger');
			
						
			if ( smooth_html.attr('id') != null )	{
				
				smooth_html.attr('id', 'smoothScroll-landing');
				
			} else if ( smooth_body.attr('id') == null )	{
				
				smooth_body.attr('id', 'smoothScroll-landing');
				
			} else if ( smooth_header.attr('id') == null )	{
				
				smooth_header.attr('id', 'smoothScroll-landing');
				
			} else if ( smooth_first_div.attr('id') == null )	{
				smooth_first_div.attr('id', 'smoothScroll-landing');
				
			}
						
			smooth_button.attr('href', '#smoothScroll-landing');
				// when the item is clicked
				smooth_button.click(function() {
					// grab the html document and / or the body
					$("html, body").animate({
					// grab the item clicked's href and get the distance between this element
					//and the element it is scrolling to
						scrollTop: $($(this).attr("href")).offset().top + "px"
					}, {
						duration: speed,
						easing: "swing"
					});
					return false;
				});
				
										
		} // end of autodetect object literal
		
		
	}; // end of smooth object literal
});