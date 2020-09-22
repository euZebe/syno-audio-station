const { app, BrowserWindow } = require("electron");
const path = require("path");

let win;
function createWindow() {
  // Cree la fenetre du navigateur.
  win = new BrowserWindow({
    width: 1600,
    height: 1200,
    backgroundColor: "#312450",
    icon: path.join(__dirname, "assets/icon.png"),
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL("https://192.168.1.48/audio/").catch(console.error);
  // et charger le fichier index.html de l'application.
  // win.loadFile('index.html')

  // Ouvre les DevTools.
  // win.webContents.openDevTools();
}

app.commandLine.appendSwitch("ignore-certificate-errors", "true");

// Cette méthode sera appelée quant Electron aura fini
// de s'initialiser et prêt à créer des fenêtres de navigation.
// Certaines APIs peuvent être utilisées uniquement quant cet événement est émit.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
  // so that macOS can recreate the app if no other window exists
  win = null;
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// Dans ce fichier, vous pouvez inclure le reste de votre code spécifique au processus principal. Vous pouvez également le mettre dans des fichiers séparés et les inclure ici.
