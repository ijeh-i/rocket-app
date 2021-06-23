const { BrowserWindow, app } = require('electron');
const { autoUpdater } = require("electron-updater")

const path = require('path');
const isDev = require('electron-is-dev');

require('@electron/remote/main').initialize();

// Setup logger 
autoUpdater.logger = require('electron-log');
autoUpdater.logger.transports.file.level = 'info';

// Setup updater events
autoUpdater.on('checking-for-update', () => { 
	console.log('checking for updates...');
})

autoUpdater.on('update-available', (info) => { 
	console.log('Updaye available');
	console.log('Version', info.version);
	console.log('Release date', info.releaseDate);
});

autoUpdater.on('downlaod-progress', (progress) => { 
	console.log(`Progress ${Math.floor(progress.percent)}`);
})

autoUpdater.on('update-downloaded', (info) => { 
		console.log('Update downloaded');
		autoUpdater.quitAndInstall();
})

autoUpdater.on('error', (error) =>  {
	console.error(error);
})

function createWindow() {
	//Create the broswer window
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			enableRemoteModule: true,
		},
	});
	win.loadURL( isDev ? 'http://localhost:8000' : `file://${path.join(__dirname, '../build/index.html')}` );
}

app.on('ready', () => { 
	// Trigger update check
	console.log('isDev',isDev);
	if (isDev) { 
		autoUpdater.checkForUpdates();
	}
	createWindow()
});

app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}  
});

app.on('activate', function () {
	console.log('########## am Starting ');
	console.log(BrowserWindow.getAllWindows());
	if (BrowserWindow.getAllWindows().length === 0) createWindow();

	console.log('#########  am Ending');
});
