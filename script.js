document.getElementById('loginBtn').addEventListener('click', function() {
  var formContainer = document.getElementById('loginFormContainer');
  formContainer.style.display = formContainer.style.display === 'block' ? 'none' : 'block';
});

function validateForm() {
  document.getElementById('usernameError').innerText = '';
  document.getElementById('passwordError').innerText = '';

  // Get input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var valid = true;

  if (username === '') {
      document.getElementById('usernameError').innerText = 'Username is required.';
      valid = false;
  }

  if (password === '') {
      document.getElementById('passwordError').innerText = 'Password is required.';
      valid = false;
  }

  if (valid) {
      document.getElementById('loginFormContainer').style.display = 'none';
  }

  return valid;
}
