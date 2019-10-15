

$("#sign-up-btn").click(function (event) {
    event.preventDefault();
    // console.log('clicked');
    //TODO: create object to send in post request


    //  handler to make ajax call when logged in
    $.post('/auth/signup', signUpInfo).then(function () {
        ///do stuff once sign up sucessful
    })

})