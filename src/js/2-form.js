const STORAGE_KEY = 'feedback-form-state';

const myForm = document.querySelector('.feedback-form');

myForm.addEventListener('input', onFormInput);
myForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const email = myForm.elements.email.value;
  const message = myForm.elements.message.value;

  const data = {
    email,
    message,
  };

  console.log(data);

  localStorage.removeItem(STORAGE_KEY);
  myForm.reset();
}

function onFormInput() {
  const email = myForm.elements.email.value;
  const message = myForm.elements.message.value;

  const data = {
    email,
    message,
  };

  saveToLS(STORAGE_KEY, data);
}

function saveToLS(key, value) {
  const zip = JSON.stringify(value);
  localStorage.setItem(key, zip);
}

function loadFromLS(key) {
  const zip = localStorage.getItem(key);

  try {
    return JSON.parse(zip);
  } catch {
    return zip;
  }
}

function init() {
  const data = loadFromLS(STORAGE_KEY) || {};

  myForm.elements.email.value = data.email || '';
  myForm.elements.message.value = data.message || '';
}

init();
