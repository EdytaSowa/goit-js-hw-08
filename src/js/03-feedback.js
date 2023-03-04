import { throttle } from 'lodash';

const form = document.querySelector('.feedback-form');

// const emailAdress = document.querySelector('input');
// const messageUser = document.querySelector('textarea');

const completeData = throttle(evt => {
  evt.preventDefault();
  const user = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(user));

}, 500);

const saveDate = localStorage.getItem('feedback-form-state');

console.log(`saveDate: ${saveDate}`);
const parseData = JSON.parse(saveDate);

// console.log(parseData.email);
form.elements.email.value = parseData.email;
form.elements.message.value = parseData.message;



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