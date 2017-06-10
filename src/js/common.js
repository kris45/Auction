/**
 * Created by My on 09.06.2017.
*/

$(document).ready(function () {

    var $left = $('#button-left');
    var $right = $('#button-right');
    var $current = 0;
    var $pixels = 700;
    var $liLength = $('#slider-list').find('li').length;
    var $min = -(($liLength - 1)* $pixels);
    var $max = 0;

    $left.on('click', function(){
    	if ($current != $max) {
    		$current += 700;
    		$('#slider-list').animate({ left : $current + 'px'}, 500);
    	}
    });

    $right.on('click', function(){
    	if ($current != $min) {
			$current -= 700;
    		$('#slider-list').animate({ left : $current + 'px'}, 500);
    	}
    });



var start = $('#stick_menu').offset().top;
 $(window).scroll(function(){
  if ($(window).scrollTop()>=start) {
      if ($('#stick_menu').hasClass()==false){
          $('#stick_menu').addClass('stick');
      }
  }
  else {
      $('#stick_menu').removeClass('stick');
  }
 });


 });
