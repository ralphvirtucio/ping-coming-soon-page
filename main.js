// Basic Submission of Form

const enteredEmail = document.querySelector('.email__input');
const pingForm = document.querySelector('.ping__form');

let email;

enteredEmail.addEventListener('change', (e) => {
  email = e.target.value;
});

pingForm.addEventListener('submit', (e) => {
  e.preventDefault();

  console.log(e.target[0].value);

  email = '';
  e.target[0].value = '';
});
