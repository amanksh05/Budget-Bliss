import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStyle } from './styles/GlobalStyle.jsx'
import { GlobalProvider } from './context/GlobalContext.jsx'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <ToastContainer autoClose={3000} />
      <App />

    </GlobalProvider>



  </React.StrictMode>,
)
