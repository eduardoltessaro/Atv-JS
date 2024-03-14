const { app, BrowserWindow } = require("electron");
require("electron-reload")(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`),
});
function createWindow() {
    const win = new BrowserWindow(
        {
            width: 800,
            height: 800
        }
    );
    win.loadFile("index.html");
}
app.whenReady().then(createWindow);