document.addEventListener('DOMContentLoaded', function() {
    const showSignIn = document.getElementById('show-sign-in');
    const showSignUp = document.getElementById('show-sign-up');
    const signInForm = document.getElementById('sign-in-form');
    const signUpForm = document.getElementById('signup-form');

    showSignIn.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('sign-in-form').style.display = 'block';
        document.getElementById('sign-up-form').style.display = 'none';
    });

    showSignUp.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById('sign-in-form').style.display = 'none';
        document.getElementById('sign-up-form').style.display = 'block';
    });

    function validateForm(form) {
        const email = form.querySelector('input[type="email"]');
        const password = form.querySelector('input[type="password"]');
        let valid = true;

        if (!email.value || !email.checkValidity()) {
            email.classList.add('is-invalid');
            valid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        if (!password.value) {
            password.classList.add('is-invalid');
            valid = false;
        } else {
            password.classList.remove('is-invalid');
        }

        return valid;
    }

    document.getElementById('signin-form').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm(this)) {
            alert('Sign In successful!');
            // Perform sign-in actions, e.g., send data to server
        }
    });

    document.getElementById('signup-form').addEventListener('submit', function(event) {
        event.preventDefault();
        if (validateForm(this)) {
            alert('Sign Up successful!');
            // Perform sign-up actions, e.g., send data to server
        }
    });
});
