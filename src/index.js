import './components/KeyBoard.js';
import * as dat from 'dat.gui';

const keyBoard = document.querySelector('key-board');
const gui = new dat.GUI();

document.addEventListener('keyup', (e) => {
  const keyCode = e.code;
  const key = keyBoard.shadowRoot.querySelector(`.key__${keyCode}`);
  key.classList.add('key__active');
  setTimeout(() => {
    key.classList.remove('key__active');
  }, 100);
});

const options = {
  theme: 'keychron'
};

gui.add(options, 'theme', ['keychron', 'hayabusa', 'instago'])
  .onChange(data => {
    keyBoard.classList.remove('keychron', 'hayabusa', 'instago');
    keyBoard.classList.add(data);
  });

gui.close();
