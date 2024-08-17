const { app } = require('electron');
const ControlWindow = require('./ControlWindow');
const CreateMenu = require('./CreateMenu');

function App() {
  const win = require('./CreateWindow');
  win.setSkipTaskbar(true);

  const tray = require('./Tray');

  const { toggle } = ControlWindow(win, tray);

  tray.on('click', toggle);

  tray.on('right-click', () => CreateMenu(win));
}

app.whenReady().then(() => {
    App();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

if (process.platform == 'darwin') app.dock.hide();