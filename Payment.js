// Payment.js

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Handle form submission
    const form = document.querySelector('form.needs-validation');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      if (form.checkValidity() === false) {
        event.stopPropagation();
      } else {
        // Perform the form submission or further processing here
        console.log('Form submitted successfully');
      }
      form.classList.add('was-validated');
    });
  
    // Disable form validation styling when inputs are changed
    const formInputs = form.querySelectorAll('input');
    formInputs.forEach(function(input) {
      input.addEventListener('input', function() {
        if (input.checkValidity() === true) {
          input.classList.remove('is-invalid');
        }
      });
    });
  });
  