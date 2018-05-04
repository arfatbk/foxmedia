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




    // Call to Django mail

    $(document).on('submit', '#sendMsgForm', function(e) {
        e.preventDefault();
        // if($('#name').val() =='' && $('#email').val()=='' && $('#message').val()==''){
        //      ;
        // }
        $("#formID").validate();
        //Disable send button
        $('.submitBtn').prop('disabled', true);
        $('.submitBtn').html(' Please wait..Sending message');

        
            $.ajax({
                type:'POST',
                url:'https://django-mail-server.herokuapp.com/send/message/',
                data:{
                    name:$('#name').val(),
                    email:$('#email').val(),
                    message:$('#message').val(),
                },
            }).done(function(){
                //display success card
                    $('.popover-send').addClass('remove');
                    $('.success-popover').removeClass('remove');
                    
                    $('.submitBtn').prop('disabled', false);
                    
                    $('.submitBtn').html('Send message');

            }).fail(function(){
                    $('.submitBtn').prop('disabled', false);
                    $('.popover-send').removeClass('remove');
                    $('.success-popover').addClass('remove');
                    
                    $('.submitBtn').html('Send message');
            });
    });
});



