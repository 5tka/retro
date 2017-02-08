console.log('hello from script.js');



$( document ).ready(function() { // начало 

    $('.dd-tr').click(function(){
        $(this).toggleClass('tr180');
        $('.dd').stop(true).slideToggle('slow');

    });

















}); // конец