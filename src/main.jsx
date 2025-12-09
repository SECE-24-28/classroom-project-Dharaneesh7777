import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Display2 from './Diaplay2.jsx'
import Disp2overcome from './Disp2overcome.jsx'
import Disp3 from './increment.jsx'
import Display3 from './Disp3.jsx'
import Display6 from './Disp5.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Display2/> */}
    {/* <Disp2overcome/> */}
    {/* <Disp3/> */}
    <Display6/>
  </StrictMode>,
)
