
const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');
const { exec } = require('child_process');

function startMongod(){
    const command = 'mongod';
    const childProcess = exec(command);

    childProcess.stdout.on('data', (data) => {
        console.log(data);
    })

  childProcess.stderr.on('data', (data) => {
    console.error(data);
  });

  childProcess.on('close', (code) => {
    console.log(`O comando foi encerrado com código de saída ${code}`);
  });
}

function startServerAPI(){
    const command = 'componentmanagerserver';
    const childProcess = exec(command);

    childProcess.stdout.on('data', (data) => {
        console.log(data)
    });

    childProcess.stderr.on('data', (data) => {
        console.error(data);
    });
    
    childProcess.on('close', (code) => {
        console.log(`O comando foi encerrado com código de saída ${code}`);
    });
}

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })
  
    win.loadURL(isDev? "http://localhost:6969" : `file://${path.join(__dirname, "../dist/index.html")}`)
  }

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })

app.whenReady().then(() => {
    createWindow();
    startServerAPI();
    startMongod();
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});


