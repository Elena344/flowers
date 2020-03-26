$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    if($(this).closest('.accordion-item').hasClass('active')) {
        $('.accordion-item').removeClass('active');
    } else {
        $('.accordion-item').removeClass('active');

        $(this).closest('.accordion-item').addClass('active');
    }

    var $content = $(this).next();
    $content.slideToggle(500);
    $('.accordion-item .content').not($content).slideUp('fast');
});

$(function(){

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 1000,
		values: [ 0, 300 ],
		step: 10,
		slide: function( event, ui ) {
			$( "#price" ).val( "Price EGP " + ui.values[ 0 ] + " - EGP " + ui.values[ 1 ] );
		}
	});
	$( "#price" ).val( "Price EGP " + $( "#slider-range" ).slider( "values", 0 ) +
		" - EGP " + $( "#slider-range" ).slider( "values", 1 ) );

});