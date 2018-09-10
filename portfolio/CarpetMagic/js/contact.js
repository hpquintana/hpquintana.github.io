$(function () {
    var $confirmation = $('#confirmation-message');
    var confirmationMessage = "Message sent, one of our represantives will reach out to you shortly.";
    $('#submit-button').click(function () {
        $('#submit-button').prop('disabled', true);
        $confirmation.fadeOut(1);

        if (validateInputs()) {
            $confirmation.css({
                color: "white"
            });
            sendEmail();
        } else {
            $confirmation.css({
                color: "#ff3333"
            });
            $('#submit-button').prop('disabled', false);
            showConfirmationMessage();
        }
        return false;
    });

    function validateInputs() {
        if( $("#name").val() == ''){
            confirmationMessage = "Please enter a name";
            return false;
        } else if($("#message").val() == ''){
            confirmationMessage = "Please enter a message";
            return false;
        } else if($("#number").val() == '') {
            confirmationMessage = "Please enter a valid phone number";
            return false;
        }
        return true;
    }

    function sendEmail() {
        $.ajax({
            url: "http://localhost/CarpetMagic/php/contact.php"
            , type: 'POST'
            , data: {
                'name': $("#name").val(),
                'number': $("#number").val(),
                'address': $("#address").val(),
                'message': $("#message").val()
            } 
            , success: function (response) {
                if (response == 1) {
                    $confirmation.css({
                        color: "green"
                    });
                    confirmationMessage = "Message sent, one of our represantives will reach out to you shortly.";

                } else {
                    console.log(response);
                    $confirmation.css({
                        color: "red"
                    });
                    confirmationMessage = "Something went wrong. Please try again later.";
                }

                showConfirmationMessage();
            }
            , error: function (xhr, textStatus, errorThrown) {
                $confirmation.css({
                    color: "red"
                });
                confirmationMessage = "Something went wrong. Please try again later. outside ";
                showConfirmationMessage();
            }
        });
    }

    function showConfirmationMessage() {
        $confirmation.text(confirmationMessage);
        $confirmation.fadeIn();

        setTimeout(
            function () {
                $confirmation.fadeOut();
            }, 5000);
    }


    function isEmailValid() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test($("input[name='email']").val());
    }
    function isNumberValid() {
        var re = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        return re.test($("#number").val());
    }

});