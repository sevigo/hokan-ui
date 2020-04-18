import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import rootReducer from 'reducers'
import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Hokan from './components/hokan'

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

window.onload = () => {
  render(
    <Provider store={store}>
      <Hokan />
    </Provider>,
    document.getElementById('root')
  )
}

window.onMessage('select:dir', (event, data) => {
  store.dispatch({ type: 'CONFIG_ADD_DIR', ...data })
})

