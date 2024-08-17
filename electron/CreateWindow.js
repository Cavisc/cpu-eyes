const { BrowserWindow } = require('electron');
const CreateMenu = require('./CreateMenu');

function CreateWindow() {
    const win = new BrowserWindow({
      icon: '../assets/cpu_eyes_icon.png',
      width: 288,
      height: 216,
      show: false,
      frame: false,
      resizable: false,
      fullscreenable: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
      },
      transparent: true,
    });
  
    win.loadFile('index.html');

    return win;
}

module.exports = CreateWindow();