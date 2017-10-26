
$(document).ready(function(){


$( '.btnP' ).click(function( event ) {
  $( this ).css({
	  "font-size" : "8pt",
		"background-color" : "#fff",
		"text-decoration" : "none",
		"text-transform" : "uppercase",
		"color" : "#35373e",
		"border" : "1px solid",
		"padding" : "1% 2%",
		"outline" : "none"
	});
 $( '.btnP' ).not(this).css({
		"font-size" : "8pt",
		"color" : "#7d7d7d",
		"border" : "1px solid #fff"
	});

var a = $(this).html();
	if (a == "Web") {
		$('.cell').has('.web').css({"display" : "block"});
		$('.cell:not(:has(.web))').css({"display" : "none"});
	}
	if (a == "Study") {
		$('.cell').has('.study').css({"display" : "block"});
		$('.cell:not(:has(.study))').css({"display" : "none"});
	}
	if (a == "Design") {
		$('.cell').has('.design').css({"display" : "block"});
		$('.cell:not(:has(.design))').css({"display" : "none"});
	}
	if (a == "All work") {
		$('.cell').css({"display" : "block"});
	}
});


$('img.web').eq(0).hover(
	function() {$(this).attr('src', 'img/1.1.jpg');},
	function() {$(this).attr('src', 'img/1.jpg');}
);
$('img.web').eq(1).hover(
	function() {$(this).attr('src', 'img/3.3.jpg');},
	function() {$(this).attr('src', 'img/3.jpg');}
);
$('img.web').eq(2).hover(
	function() {$(this).attr('src', 'img/4.4.jpg');},
	function() {$(this).attr('src', 'img/4.jpg');}
);
$('img.design').eq(0).hover(
	function() {$(this).attr('src', 'img/2.2.jpg');},
	function() {$(this).attr('src', 'img/2.jpg');}
);
$('img.design').eq(1).hover(
	function() {$(this).attr('src', 'img/6.6.jpg');},
	function() {$(this).attr('src', 'img/6.jpg');}
);
$('img.study').eq(1).hover(
	function() {$(this).attr('src', 'img/7.7.jpg');},
	function() {$(this).attr('src', 'img/7.jpg');}
);



});

/*
  $(this).css({
		"color" : "red"
	});
*/
