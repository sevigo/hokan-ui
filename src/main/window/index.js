import { shell } from 'electron'
import { Window } from 'nucleon'
import path from 'path'

export default class MainWindow extends Window {
  sourceFile() {
    return path.resolve(__dirname, '..', 'renderer', 'index.html')
  }

  enlarge() {
    this.setMinimumSize(800, 640)
    this.resize({ width: 1000, height: 800 }, true)
  }

  disableNavigation() {
    this.webContents.on('new-window', async (event, navigationUrl) => {
      event.preventDefault()
      await shell.openExternal(navigationUrl)
    })

    this.webContents.on('will-navigate', event => event.preventDefault())
  }

  send(event, data) {
    this.webContents.send(event, data)
  }
}
