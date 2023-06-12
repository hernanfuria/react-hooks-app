import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from './components/HooksApp.jsx'
// import { CounterApp } from './01-useState/CounterApp.jsx'
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook.jsx'
// import { SimpleForm } from './02-useEffect/SimpleForm.jsx'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook.jsx'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
import { MemoHook } from './06-memos/MemoHook'

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <MemoHook />
  //</React.StrictMode>,
)
