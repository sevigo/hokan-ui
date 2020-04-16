const { ipcRenderer } = require('electron')

process.once('loaded', () => {
    console.log("preload: add message [select:dir] listener")
    window.addEventListener('message', evt => {
        if (evt.data.type === 'select:dir') {
            console.log("preload: [select:dir] message")
            ipcRenderer.send('select:dir')
        }
    })
})

window.onMessage = (message, callback) => {
    ipcRenderer.on(message, callback)
}

window.document.addEventListener('DOMContentLoaded', () => { })
