const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { exec } = require('child_process'); // 确保

function createWindow() {
    const win = new BrowserWindow({
        width: 1100,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false, // 推荐使用预加载脚本来处理ipc通信
            contextIsolation: true,
        },
    });

    win.loadFile("./dist/index.html/");
    win.webContents.openDevTools()
}

app.whenReady().then(() => {
    createWindow();

    // 使用 exec 在 macOS 上执行 ps 命令获取进程列表
    ipcMain.handle('get-processes', async () => {
        return new Promise((resolve, reject) => {
            exec('ps aux', (error, stdout, stderr) => { // 使用 ps aux 获取进程信息
                if (error) {
                    reject(error);
                } else {
                    const processes = stdout.split('\n').map(line => {
                        const parts = line.trim().split(/\s+/);
                        return { user: parts[0], pid: parts[1], cpu: parts[2], mem: parts[3], command: parts.slice(10).join(' ') };
                    }).filter(process => process.pid); // 过滤掉无效的行
                    resolve(processes);
                }
            });
        });
    });


    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
