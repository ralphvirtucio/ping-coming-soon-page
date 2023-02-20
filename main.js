// Basic Submission of Form

// 1. Get the value from the form
const enteredEmail = document.querySelector('.email__input');
const form = document.querySelector('.ping__form');

// enteredEmail.addEventListener('change', (e) => {

// });

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const enteredEmail = event.target[0].value;

  if (enteredEmail.trim() === '') {
    console.log('email field should not be empty');
    return;
  }

  if (enteredEmail.includes('@')) {
    console.log('correct email format');
  } else {
    console.log('wrong email format');
  }
});
