const { app, BrowserWindow } = require("electron")

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800, 
		height: 600
	})

	win.loadFile("src/index.html")
}

app.whenReady().then(() => {
	createWindow()

	app.on("activate", () => { //åpner et nytt vindu om det ikke finnes noen fra før
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})


})

app.on("window-all-closed", () => { //så programmet avsluttes når vinduene lukkes
	if (process.platform !== "darwin") {
		app.quit()
	}
})