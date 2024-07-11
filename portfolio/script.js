// Script for form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    // Here you can implement the form submission logic (e.g., send data to server, show confirmation message)
    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Form submitted successfully!');
});
