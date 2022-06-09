import './components/KeyBoard.js';
import * as dat from 'dat.gui';

const keyBoard = document.querySelector('key-board');
keyBoard.prepareKeyBoard();
const gui = new dat.GUI();

const options = {
  theme: 'keychron',
  rgb: 'Desactivated'
};

gui.add(options, 'rgb', ['Activated', 'Desactivated'])
  .onChange(data => {
    const keyBoardWrapper = keyBoard.shadowRoot.querySelector('.keyboard');
    const keys = keyBoard.shadowRoot.querySelectorAll('keyboard-key');
    if (data === 'Activated') {
      keyBoardWrapper.classList.add('keyboard__rgb');
      keys.forEach(key => {
        key.classList.add('keyboard__rgb');
      });
      return;
    }
    keyBoardWrapper.classList.remove('keyboard__rgb');
    keys.forEach(key => {
      key.classList.remove('keyboard__rgb');
    });
  });

gui.add(options, 'theme', ['keychron', 'hayabusa', 'instago'])
  .onChange(data => {
    keyBoard.classList.remove('keychron', 'hayabusa', 'instago');
    keyBoard.classList.add(data);
  });
