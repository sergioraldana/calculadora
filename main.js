const { app, BrowserWindow } = require('electron');

function createWindows() {
    const appwindow = new BrowserWindow({
        width: 650,
        height: 450,
        webPreferences: {
            nodeIntegration: true
        }
    });
    appwindow.loadFile('./index.html');
}

app.whenReady().then(createWindows);