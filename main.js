// Basic Submission of Form

// Initialize DOM elements
const enteredEmailInput = document.querySelector('.email__input');
const form = document.querySelector('.ping__form');
const invalidMessage = document.querySelector('.invalid-message');

// Listen to the keypress for the input
enteredEmailInput.addEventListener('keypress', (e) => {
  // Check if the value is not empty
  if (e.target.value !== '') {
    // If the value is not empty hide and remove the invalid styles
    invalidMessage.classList.add('hide');
    enteredEmailInput.classList.remove('input__invalid');
    enteredEmailInput.classList.remove('email__input-invalid');
  }
});

// Listen to the submission of the form
form.addEventListener('submit', (event) => {
  // Prevent on reloading the page
  event.preventDefault();
  // Initialize the value of the input
  const enteredEmail = event.target[0].value;

  // Check if the enteredEmail is empty
  if (enteredEmail.trim() === '') {
    // If the enteredEmail is empty show and add the invalid styles
    invalidMessage.classList.remove('hide');
    enteredEmailInput.classList.add('input__invalid');
    // If the enteredEmail is empty set the approriate feedback for the user
    invalidMessage.textContent =
      'Whoops! It looks like you forgot to add your email';
    return;
  }

  // Validation of the email
  if (
    enteredEmail.includes('@') &&
    !enteredEmail.startsWith('@') &&
    !enteredEmail.endsWith('@') &&
    enteredEmail.split('@')[1].includes('.')
  ) {
    // If the enteredEmail is valid reset the input value
    event.target[0].value = '';
  } else {
    // If the enteredEmail is invalid add the invalid styles
    invalidMessage.classList.remove('hide');
    enteredEmailInput.classList.add('input__invalid');

    // If the enteredEmail is invalid set the approriate feedback for the user
    invalidMessage.textContent = 'Please provide a valid email address';
  }
});
