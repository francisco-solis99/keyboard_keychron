import './components/KeyBoard.js';
import * as dat from 'dat.gui';

const keyBoard = document.querySelector('key-board');
keyBoard.prepareKeyBoard();
const gui = new dat.GUI();

const options = {
  theme: 'keychron'
};

gui.add(options, 'theme', ['keychron', 'hayabusa', 'instago'])
  .onChange(data => {
    keyBoard.classList.remove('keychron', 'hayabusa', 'instago');
    keyBoard.classList.add(data);
  });

gui.close();
