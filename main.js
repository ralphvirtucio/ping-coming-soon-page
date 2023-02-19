const enteredEmail = document.querySelector('.email__input');

enteredEmail.addEventListener('change', (e) => {
  console.log(e.target.value);
});
