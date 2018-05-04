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
    
    $('.close-success-popover').on('click', function() {
        $('.cover').css('visibility','hidden');
        $('.cover').css('opacity',0);
        $('.popover-send').removeClass('remove');
        $('.success-popover').addClass('remove');
    });




    // Call to Django mail from hero

    $(document).on('submit', '#sendMsgForm', function(e) {
        e.preventDefault();
        
        $("#sendMsgForm").validate();
        //Disable send button
        $('.submitBtn').prop('disabled', true);
        $('.submitBtn').html(' Please wait..Sending message');

        
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();
            ajaxcall(name,email,message);
    });

    
    // Call to Django mail from 
    $(document).on('submit', '#sendMsgFormFooter', function(e) {
        e.preventDefault();
      
        $("#sendMsgFormFooter").validate();
        //Disable send button
        $('.submitBtn').prop('disabled', true);
        $('.submitBtn').html(' Please wait..Sending message');

        var name = $('#nameFooter').val();
        var email = $('#emailFooter').val();
        var message = $('#messageFooter').val();
            ajaxcall(name,email,message);
    });


});



// ajax function
function ajaxcall(name,email,message) {
    $.ajax({
        type: 'POST',
        url: 'https://django-mail-server.herokuapp.com/send/message/',
        data: {
            name: name,
            email: email,
            message: message,
        },
    }).done(function () {
        //display success card
        
        $('.cover').css('visibility','visible');
        $('.cover').css('opacity',1);

        $('.popover-send').addClass('remove');
        $('.success-popover').removeClass('remove');
        $('.submitBtn').prop('disabled', false);
        $('.submitBtn').html('Send message');
    }).fail(function () {
        $('.submitBtn').prop('disabled', false);
        $('.popover-send').removeClass('remove');
        $('.success-popover').addClass('remove');
        $('.submitBtn').html('Send message');

        alert('Server error,   Problem connecting server');
    });
}

