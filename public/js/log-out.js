//When sign out button clicked, user will be logged out of session
$('.sign-out-btn').click(function (event) {
    event.preventDefault;
    $.get('/logout').then(function (data) {
        alert('You have successfully logged out')
    })
})