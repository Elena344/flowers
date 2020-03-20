$('.accordion-item .heading').on('click', function(e) {
    e.preventDefault();

    // Add the correct active class
    if($(this).closest('.accordion-item').hasClass('active')) {
        // Remove active classes
        $('.accordion-item').removeClass('active');
    } else {
        // Remove active classes
        $('.accordion-item').removeClass('active');

        // Add the active class
        $(this).closest('.accordion-item').addClass('active');
    }

    // Show the content
    var $content = $(this).next();
    $content.slideToggle(100);
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