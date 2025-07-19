// Password toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Handle password toggling for all toggle buttons
  document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', function() {
      const targetId = this.getAttribute('data-target');
      const passwordField = document.getElementById(targetId);
      
      if (passwordField) {
        const isPasswordHidden = passwordField.type === 'password';
        passwordField.type = isPasswordHidden ? 'text' : 'password';
        
        // Toggle eye icon
        this.classList.toggle('fa-eye');
        this.classList.toggle('fa-eye-slash');
      }
    });
  });

  // Signup form validation
  const signupForm = document.getElementById('signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      const errorMessage = document.getElementById('error-message');

      if (password !== confirmPassword) {
        e.preventDefault();
        errorMessage.textContent = 'Passwords do not match.';
      } else {
        errorMessage.textContent = '';
      }
    });
  }

  // Login form handling
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      // Add any login validation here if needed
    });
  }
});