const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: true  // Habilita o uso de <webview>
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
