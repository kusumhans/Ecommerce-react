import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CookiesProvider } from 'react-cookie';


//import browser router
import { BrowserRouter } from 'react-router-dom';

//import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <CookiesProvider defaultSetOptions={{ path: '/' }}>
         <App />
      </CookiesProvider>

  </BrowserRouter>,
)
