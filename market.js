
    var usernameInput = document.getElementById('UserName');
    var passwordInput = document.getElementById('Password');
    var loginButton = document.querySelector('.log-btn');
    console.log(loginButton);

    loginButton.addEventListener('click', function () {
        var username = usernameInput.value;

        var password = passwordInput.value;

        var isValidEmail = validateEmail(username);

        var isVlidPassword = validatePassword(password);

        if (username === isValidEmail && password === isVlidPassword) {
            window.location.href = 'Acceuil.html';
            console.log('Valid');
        } else {
            // get elemet by id or class to show invalid message
            console.log('Invalid');
        }
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
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });
document.toUpperCase();