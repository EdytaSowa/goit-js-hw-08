import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');

const emailAdress = document.querySelector('input[name="email"]');
const messageUser = document.querySelector('textarea[name="message"]');

const completeData = throttle(evt => {
  evt.preventDefault();

  const user = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(user));


}, 500);

const saveDate = localStorage.getItem('feedback-form-state');

console.log(saveDate);
const parseData = JSON.parse(saveDate);

console.log(parseData);


emailAdress.value = parseData.email;
messageUser.value = parseData.message;

function consoleMessage(evt) {
  evt.preventDefault();
  localStorage.removeItem('feedback-form-state');

  let user = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log(user);
  form.reset();
}

form.addEventListener('input', completeData);
form.addEventListener('submit', consoleMessage);
