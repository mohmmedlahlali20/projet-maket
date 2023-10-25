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
    var usernameInput = document.getElementById('UserName');
    var passwordInput = document.getElementById('Password');
    var loginButton = document.querySelector('.log-btn');

    loginButton.addEventListener('click', function () {

        var username = usernameInput.value;

        var password = passwordInput.value;

        var isValidEmail = validateEmail(username);

        var isVlidPassword = validatePassword(password);
        console.log(isValidEmail);
        if (true == isValidEmail && true == isVlidPassword) {
            window.location.href = 'index.html';

            console.log('Valid');
        } else {
            // get elemet by id or class to show invalid message
            console.log('Invalid');
        }
    });


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
