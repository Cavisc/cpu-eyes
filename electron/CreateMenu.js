const { Menu } = require('electron');

function CreateMenu (win, x, y) {
    const template = [
        {
            label: 'Close', 
            role: 'quit',
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    menu.popup({ window: win });
}

module.exports = CreateMenu;