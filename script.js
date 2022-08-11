const textarea = document.querySelector('textarea');
const count = document.getElementById('counter');
function counter(e) {
  count.innerHTML = 500 - e.target.value.length;
}

textarea.addEventListener('keyup', counter);
