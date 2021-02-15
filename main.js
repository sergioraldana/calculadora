const { app, BrowserWindow } = require('electron');

function createWindows() {
    const appwindow = new BrowserWindow({
        width: 350,
        height: 250,
        webPreferences: {
            nodeIntegration: true
        }
    });
    appwindow.loadFile('./index.html');
}

app.whenReady().then(createWindows);