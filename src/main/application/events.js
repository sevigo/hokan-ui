import { dialog, ipcMain } from 'electron'

export const onSelectDirs = function () {
    ipcMain.on('select:dir', () => {
        dialog.showOpenDialog({
            title: "Select Directory",
            properties: ['openDirectory'],
        }).then(({ filePaths, canceled }) => {
            if (canceled) return

            console.log(filePaths)
            this.window.send('select:dir', { data: filePaths[0] })
        }).catch(err => { console.log(err) })
    })
}

export default {
    onSelectDirs
}