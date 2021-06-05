const form = document.getElementById('form'),
      submitBtn = document.getElementById('submit'),
      errorIcon = document.getElementById('error-icon'),
      errorText = document.getElementById('error-text'),
      input = document.getElementById('input'),
      pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  const text = input.value;

  if(!text.match(pattern)) {
    if (!form.classList.contains('invalid')) {
      form.classList.add('invalid')
    }
  }
  else {
    if (form.classList.contains('invalid')) {
      form.classList.remove('invalid')
    }
  }
});