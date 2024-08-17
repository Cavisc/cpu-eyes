const si = require("systeminformation");

function toGB (value) {
    return Math.round(value / 1024 / 1024 / 1024);
}

async function getCpuName() {
    const cpu = await si.cpu();

    return (cpu.brand) ? cpu.brand : 'Indisponível!';
}

async function getCpuUsage() {
    const usage = await si.currentLoad();

    return (usage.currentLoad) ? usage.currentLoad.toFixed(1) + '%' : 'Indisponível!';
}

async function getProcess() {
    const processes = await si.processes();
    let utilProcesses;

    processes.list.sort((a, b) => b.cpu - a.cpu);

    utilProcesses = processes.list.filter(item => item.parentPid != 0 && item.parentPid != 1)

    return utilProcesses[0] ? utilProcesses[0].name : 'Indisponível!';
}

async function getCpuSpeed() {
    const speed = await si.cpuCurrentSpeed();

    return (speed.avg) ? (speed.avg + ' GHz') : 'Indisponível!';
}

async function getRamUse() {
    const mem = await si.mem();

    return (mem.used && mem.total) ? (toGB(mem.used) + '/' + toGB(mem.total) + ' GB') : 'Indisponível!';
}

const Informater = {
    getCpuName,
    getProcess,
    getCpuUsage,
    getCpuSpeed,
    getRamUse
}

export { Informater }