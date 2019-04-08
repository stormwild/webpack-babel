import Greeter from './Greeter.js';

const greeter = new Greeter();
let message = greeter.getMessage();

let el = document.getElementById('message');

el.innerHTML = message;

console.log(message);