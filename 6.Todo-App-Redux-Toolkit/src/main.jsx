import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StyledEngineProvider } from '@mui/material'
import {Provider} from 'react-redux';
import store from './app/store.js';

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={store}>
    <StyledEngineProvider injectFirst>
    <App />
    </StyledEngineProvider>
    </Provider>
  </StrictMode>,
  
)
