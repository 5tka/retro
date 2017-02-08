console.log('hello from script.js');
$(function(){
	$('#hours-slider').slider({
		range: "min",
		min: 2,
		max: 12,
		value: 4
	});
	$('.js_select').selectmenu();


    $('.dd-tr').click(function(){
        $(this).toggleClass('tr180');
        $('.dd').stop(true).slideToggle('slow');

    });
})

