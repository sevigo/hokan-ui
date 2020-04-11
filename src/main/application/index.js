import { Application } from 'nucleon'
import Window from 'window'

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
        sandbox: false,
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
