
$(document).ready(function(){

function move(i) {
	var top = $(".top").eq(i).html();
  var width = 5;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= top) {
      clearInterval(id);
    } else {
      width++; 
			$(".thinBlack").eq(i).css("width", function(val){
				return width +'%';
			});
			$(".bolt").eq(i).css("left", function(val){
				return width +'%';
			});
			$(".top").eq(i).html(width);
    } 
  }
}


var target = $('.elem');
var targetPos = target.offset().top;
var winHeight = $(window).height();
var scrollToElem = targetPos - winHeight;
$(window).scroll(function(){
  var winScrollTop = $(this).scrollTop();
  if(winScrollTop > scrollToElem){
	  for (var i = 0; i <= 5; i++) {
			move(i);
		}
		$(this).off();
  }
});




});

