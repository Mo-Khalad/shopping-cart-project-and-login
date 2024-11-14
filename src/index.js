import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import RejexContextProvider from './Store/RejexContextProvider';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import DetailsProductContextProvider from './Store/DetailsProductContextProvider';
import DisplayContextProvider from './Store/DisplayContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <DetailsProductContextProvider>
          <DisplayContextProvider>
            <React.StrictMode>
                <App/>
            </React.StrictMode> 
          </DisplayContextProvider>             
        </DetailsProductContextProvider> 
);
reportWebVitals();
