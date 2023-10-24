document.addEventListener('DOMContentLoaded', function() {
    var myModal = document.getElementById('myModal');2
    if (myModal) {
        myModal.classList.add('show');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    var usernameInput = document.getElementById('UserName');
    var passwordInput = document.getElementById('Password');
    var alertMessage = document.querySelector('.alert');
    var loginButton = document.querySelector('.log-btn');

    loginButton.addEventListener('click', function () {
        var username = usernameInput.value;

        var password = passwordInput.value;

        var isValidEmail = validateEmail(username);

        var isVlidPassword = validatePassword(password);

        if (username === isValidEmail && password === isVlidPassword) {
            console.log('Success!');
        } else {
            // get elemet by id or class to show invalid message
            console.log('Invalid');
        }
    });
});

function validateEmail(email) {

    // Regular expression for a basic email validation
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);

}

function validatePassword(password) {
    // Define a regular expression pattern for a strong password
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
