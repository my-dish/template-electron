// @flow
/* eslint-disable no-console */

'use strict';

const path = require('path');
const { app, BrowserWindow } = require('electron');
const createMenu = require('./menu');

let mainWindow;

/**
 * create browserWindow
 */
function createWindow() {
  app.commandLine.appendSwitch('disable-web-security');

  mainWindow = new BrowserWindow({
    width         : 1210,
    frame         : false,
    height        : 800,
    minWidth      : 1150,
    minHeight     : 650,
    titleBarStyle : 'hidden',
    webPreferences: {
      webSecurity         : false,
      experimentalFeatures: true
    },
    acceptFirstMouse: true
  });

  createMenu();

  if (process.env.NODE_ENV !== 'production') {
    mainWindow.loadURL('http://localhost:8080');

    // Install redux-devtools and react-developer-tools.
    const {
      default: installExtension,
      REDUX_DEVTOOLS,
      REACT_DEVELOPER_TOOLS
    } = require('electron-devtools-installer');

    installExtension([
      REDUX_DEVTOOLS,
      REACT_DEVELOPER_TOOLS
    ])
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();
  }
  else {
    mainWindow.loadURL(`file://${path.join(__dirname, '..', 'index.html')}`);
  }

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {

    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {

  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
