const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

const darkBtn = document.getElementById('darkBtn');
const lightBtn = document.getElementById('lightBtn');

darkBtn.addEventListener('click', () => {
  document.body.classList.add('dark');
});

lightBtn.addEventListener('click', () => {
  document.body.classList.remove('dark');
});
