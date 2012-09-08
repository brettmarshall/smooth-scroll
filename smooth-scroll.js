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
		// using this method, you need to specify the element you want to trigger the animation, the landing spot for the animation, and the speed of the scroll
		Manual: function(button, landing, speed)	{
			
			// wraps the variables in the jQuery Object
			button = $(button);
			landing = $(landing);
			
			// take the clickable element (a tag) and add #smoothScroll-landing to the href
			button.attr('href', '#smoothScroll-landing');
			// the default location of the landing spot will be html if not specified.
			landing = landing || $('html');
			// assigning the id smoothScroll-landing to the landing element
			landing.attr('id', 'smoothScroll-landing');
			// the default speed is 300 milliseconds
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
		}, // end of the smoothScroll.Manual object
		
		// This method assumes you are using a button that simply take the user back to the top of the page,
		// You just need to give your button or "a" tag a class of "smoothScroll-trigger"
		AutoDetect: function(speed)	{
			
			speed = speed || 300;
			
			var smooth_html = $('html');
			var smooth_body = $('body');
			var smooth_header = $('header');
			var smooth_first_div = $('div').first();
			var smooth_button = $('.smoothScroll-trigger');
			
			// if you don't have an id for the html element			
			if ( smooth_html.attr('id') == null )	{
				
				// assign the id of "smoothScroll-landing" to the html element	
				smooth_html.attr('id', 'smoothScroll-landing');
			
			
			
			// else if you don't have an id for the body element		
			} else if ( smooth_body.attr('id') == null )	{
				
				// assign the id of "smoothScroll-landing" to the body element
				smooth_body.attr('id', 'smoothScroll-landing');
			
			
			
			// else if you don't have an id for the header element	
			} else if ( smooth_header.attr('id') == null )	{
				
				// assign the id of "smoothScroll-landing" to the header element
				smooth_header.attr('id', 'smoothScroll-landing');
				
				
				
			// else if you don't have an id for the first div element	
			} else if ( smooth_first_div.attr('id') == null )	{
				
				// assign the id of "smoothScroll-landing" to the first div element
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
				
										
		} // end of smoothScroll.AutoDetect object
		
		
	}; // end of smoothScroll object
});