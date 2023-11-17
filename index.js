const menu = document.querySelector('#menu');
const body = document.body;

menu.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
});
