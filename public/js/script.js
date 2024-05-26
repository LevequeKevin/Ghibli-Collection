let submitted = false;

function showMessage() {
    document.getElementById('message').innerText = 'Thank you for subscribing!';
    document.getElementById('signup-form').reset();
    submitted = false;
}