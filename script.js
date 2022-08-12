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

const listOfSubject = [];
function subjectItems() {
  const subject = document.querySelectorAll('.subject');
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked === true) {
      listOfSubject.push(subject[index].value);
    }
  }
}

const form = document.querySelector('#evaluation-form');
const formData = document.querySelector('#form-data');
function changeDisplay() {
  form.style.display = 'none';
  formData.style.display = 'block';
}

const nameData = document.querySelector('#name-data');
const emailData = document.querySelector('#email-data');
const houseData = document.querySelector('#house-data');
const familyData = document.querySelector('#family-data');
const subjectData = document.querySelector('#subject-data');
const avaliationData = document.querySelector('#avaliation-data');
const observation = document.querySelector('#observation-data');
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const name = document.querySelector('#input-name').value;
  const lastName = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const house = document.querySelector('#house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const text = textarea.value;
  subjectItems();
  nameData.innerHTML = `${name} ${lastName}`;
  emailData.innerHTML = email;
  houseData.innerHTML = house;
  familyData.innerHTML = family;
  subjectData.innerHTML = listOfSubject.join(', ');
  avaliationData.innerHTML = rate;
  observation.innerHTML = text;
  changeDisplay();
});
