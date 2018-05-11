$(document).ready(function(){

    // Smooth scroll
    $('#scroll').on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top - 100
          }, 800);return false;
        //   , function(){
            
        //     // Add hash (#) to URL when done scrolling (default click behavior)
        //     window.location.hash = hash;
        //   });
        } // End if
      });

    // Fade in hero contact form 
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
        var message = $('#message').val() + "<br>from Fox media Hero";
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
        var message = $('#messageFooter').val() + "<br>from Fox media Footer";
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

