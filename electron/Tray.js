const { Tray } = require('electron');
const { resolve } = require('path');

const iconPath = resolve(__dirname, '../', 'assets', 'cpu_eyes_icon.png')

function createTray() {
    const tray = new Tray(iconPath);
    tray.setToolTip('CPU Eyes');

    return tray;
}

module.exports = createTray();