
    var menuYloc = null;
	var name = "#vertical_bar";

$(document).ready(function() { 

/* trying to create click-toggling effects on portfolio page; however it does not work well now.
	$('ul#portfolio_index li').addClass('hasjs');
	$('ul#portfolio_index p').click(function(){
			 $(this).siblings('.pf_description').animate({
				width: ['toggle', 'swing'],
				height: ['toggle', 'swing'],
				}, 
				100, 'linear');
		});  
*/


//adding nudging effects for the "See more..." links.
	$("a.seemore").hover(function(){
        $(this).stop().animate({marginLeft : "20px"},100,"swing");},
			function(){
				$(this).stop().animate({marginLeft : "0px"},600,"swing");
	});



//adding sliding and click-toggling effects on resume page
	$('h3').siblings('*').slideUp(300).delay(900).fadeIn(1200);
	$('h3').addClass('hasjs');
	$('h3').click(function() {
		  $(this).siblings('*').toggle();
		  });


//make the vertical navigation bar to be always visible floating on right
	    menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
        $(window).scroll(function () {
            var offset = menuYloc+$(document).scrollTop()+"px";
            $(name).animate({top:offset},{duration:500,queue:false});
        });


});