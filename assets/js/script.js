$(document).ready(function(){
    $('#contact').on('click', function() {
        $('.cover').css('visibility','visible');
        $('.cover').css('opacity',1);
        $('.popover-send').css('top','50%');
    });

    $('#close-popover').on('click', function() {
        $('.cover').css('visibility','hidden');
        $('.cover').css('opacity',0);
        
        $('.popover-send').css('top','0');
    });
    
    $('#close-success-popover').on('click', function() {
        $('.cover').css('visibility','hidden');
        $('.cover').css('opacity',0);
    });
});