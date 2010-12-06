$(document).ready(function() { 
	$('h3').addClass('hasjs');
	$('h3').click(function() {
		  $(this).siblings('*').toggle();
		  });
	$('ul#portfolio_index li').addClass('hasjs');
	$('ul#portfolio_index p').click(function(){
			 $(this).siblings('.pf_description').animate({
				width: ['toggle', 'swing'],
				height: ['toggle', 'swing'],
				}, 
				100, 'linear');
		});

	$("ul#portfolio_index .pf_quote").hover(function(){
        
        $(this).stop().animate({marginLeft : "20px"},100,"swing");},
			function(){
				$(this).stop().animate({marginLeft : "0px"},600,"swing");}
        
    );

});