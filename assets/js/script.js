$(document).ready(function(){
    $('#contact').on('click', function() {
        $('.cover').css('visibility','visible');
        $('.cover').css('opacity',1);
    });

    $('#close-popover').on('click', function() {
        $('.cover').css('visibility','hidden');
        $('.cover').css('opacity',0);
    });
    
    $('#close-success-popover').on('click', function() {
        $('.cover').css('visibility','hidden');
        $('.cover').css('opacity',0);
    });
});