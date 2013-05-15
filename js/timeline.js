(function( $ ) {
	$.fn.ogtimeline = function() {
		console.log('start');
		$('#timelinenav a').bind({
			mouseenter: function(event){
    			$('body').append('<div class="popup">' + $(this).text() + '</div>');
    			var width = $('.popup').outerWidth();
    			var x = event.pageX - ( width / 2 );
    			var y = event.pageY - 55;
    			$('.popup').css('left', x).css('top', y).fadeIn(100);
  			},
			mouseleave: function(event){
    			$('.popup').fadeOut().remove();
  			},  			
		});
	}
	
}( jQuery ));

$(document).ready(function() {
	$().ogtimeline();
});