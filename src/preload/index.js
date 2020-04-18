const { ipcRenderer } = require('electron')

process.once('loaded', () => {
    window.addEventListener('message', evt => {
        if (evt.data.type === 'select:dir') {
            ipcRenderer.send('select:dir')
        }
    })
})

window.onMessage = (message, callback) => {
    ipcRenderer.on(message, callback)
}

window.document.addEventListener('DOMContentLoaded', () => { })

