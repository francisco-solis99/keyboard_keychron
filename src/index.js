import './components/KeyBoard.js';

const keyBoard = document.querySelector('key-board');

document.addEventListener('keyup', (e) => {
  const keyCode = e.code;
  console.log(keyCode);
  const key = keyBoard.shadowRoot.querySelector(`.key__${keyCode}`);
  key.classList.add('key__active');
  setTimeout(() => {
    key.classList.remove('key__active');
  }, 100);
});
