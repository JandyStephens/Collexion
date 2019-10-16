

$("#sign-up-btn").click(function (event) {
    // event.preventDefault();
    // console.log('clicked');
    //TODO: create object to send in post request
    var signUpInfo = {
        name: $("#username").val().trim(),
        email: $("#email").val().trim(),
        password: $("#password").val().trim(),
    }
    console.log(signUpInfo)

    //  handler to make ajax call when logged in
    $.post('/auth/signup', signUpInfo).then(function (data) {
        ///do stuff once sign up sucessful
        if (data) {
            console.log('You have sucessfully created an account!')
        } else {
            console.log('Account creation unsuccessful. Please try again.')
        };
    })

})