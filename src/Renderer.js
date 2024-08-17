import { Informater } from "./Informater.js"

const cpuName = document.getElementById("cpu_name");
const content = document.getElementById("content");
const menuItems = document.querySelectorAll('nav ul li');

const Renderer = {
    loadingInfo: true,
    active: 'usage',
    intervalId: null,

    async start() {
        const name = await Informater.getCpuName();
        cpuName.innerText = name;
        this.render();
        this.update();
    },

    async render() {
        this.loadingInfo = true;

        switch (this.active) {
            case 'usage':
                content.innerText = await Informater.getCpuUsage();
                break;
            case 'process':
                content.innerText = await Informater.getProcess();
                break;
            case 'speed':
                content.innerText = await Informater.getCpuSpeed();
                break;
            case 'ram_use':
                content.innerText = await Informater.getRamUse();
                break;
        }

        this.loadingInfo = false;
    },

    update() {
        if (this.intervalId) clearInterval(this.intervalId);
    
        if (this.active === 'process')
            this.intervalId = setInterval(async () => {
                await this.render();
            }, 3000)
        else this.intervalId = setInterval(async () => {
                await this.render();
             }, 1000)
    },

    handleClick(menuItem) {
        if (this.loadingInfo || menuItem.id === this.active) return;

        if (this.intervalId) clearInterval(this.intervalId);
    
        this.active = menuItem.id;
    
        menuItems.forEach(item => item.classList.remove('active'));
        menuItem.classList.add('active');
    
        content.innerText = '...';
        this.render();
        this.update();
    },
}

menuItems.forEach(menuItem => {
    menuItem.addEventListener('click', () => Renderer.handleClick(menuItem));
});

export { Renderer }