import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { store } from './app/store'
import { Provider } from 'react-redux'
import { Counter } from './features/counter/counter.jsx'
import { store } from './store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Counter/> */}
    </Provider>
  </React.StrictMode>,
)
