const btnLogin = document.querySelector('#login');
btnLogin.addEventListener('click', () => {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const btnSubmit = document.querySelector('#submit-btn');
const term = document.querySelector('#agreement');
term.addEventListener('change', () => {
  if (term.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
});

const textarea = document.querySelector('textarea');
const count = document.getElementById('counter');
function counter(e) {
  count.innerHTML = 500 - e.target.value.length;
}

textarea.addEventListener('keyup', counter);
