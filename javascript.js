$(document).ready(function() { 
	$('ul#portfolio_index li').addClass('hasjs');
	$('ul#portfolio_index p').click(function(){
			 $(this).siblings('.pf_description').animate({
				width: ['toggle', 'swing'],
				height: ['toggle', 'swing'],
				}, 
				100, 'linear');
		});
	$('ul#portfolio_index p').click(function(){
			$('p').fadeToggle("slow","linear");
		});
});