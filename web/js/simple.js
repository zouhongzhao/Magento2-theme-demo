define([
    'jquery'
], function ($) {
    'use strict';
    $(document).ready(function(){

		var st = $(window).scrollTop();
		
		if(st >=10){			
			$(".page-header").addClass("bg_white");
		}else{			
			$(".page-header").removeClass("bg_white");
		}
		
				
		$(window).scroll(function () {
			
			var topheight = $(".page-header").offset().top;	
			
			if(topheight >= 10){
				
				$(".page-header").addClass("bg_white");
			}else{
				
				$(".page-header").removeClass("bg_white");
			}
			
			if ($(this).scrollTop() == 0) {
	            $('#scrollDown').fadeIn();
	        }else {
	             $('#scrollDown').fadeOut();
	        }
            
		});

		$('#scrollDown').click(function() {
             $('body,html').animate({'scrollTop':st+600},100);
             $('#scrollDown').fadeOut();
		})
		
    })
   
    
})