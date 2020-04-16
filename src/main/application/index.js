import { app } from 'electron'
import { Application } from 'nucleon'
import path from 'path'
import Window from 'window'
import mainEvents from './events'

export default class Hokan extends Application {
  components() {
    return { Window }
  }

  call(events) {
    Object.values(events).forEach(event => event.call(this))
  }

  windowOptions() {
    return {
      titleBarStyle: 'hiddenInset',
      name: this.settings.name,
      width: this.settings.width,
      height: this.settings.height,
      devTools: this.settings.devTools,
      webPreferences: {
        preload: path.join(app.getAppPath(), 'preload', 'index.js'),
        webSecurity: false,
      }
    }
  }

  onReady() {
    this.closed = false
  }

  onWindowReady() {
    this.window.removeMenu()
    this.window.disableNavigation()
    this.setupWindowEvents()
    this.call(mainEvents)
  }

  setupWindowEvents() {
    this.window.on('close', () => {
      this.closed = true
    })
    this.window.on('show', () => (this.closed = false))
    this.window.on('blur', () => {
      if (this.closed) return
    })
    this.window.on('focus', () => clearTimeout(this.inactiveTimeout))
  }
}
