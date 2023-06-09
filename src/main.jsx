import React from 'react'
import ReactDOM from 'react-dom/client'
// import { HooksApp } from './components/HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
import './index.css'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <FormWithCustomHook />
  //</React.StrictMode>,
)
