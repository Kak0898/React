import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import './App2.css';
//import App,{ Fet, App2,App3,App4,App5,App6,App7,App8} from './App';
import App,{Fet} from './App';
import { Mostrar } from './AppsDb/Mostrar';
import reportWebVitals from './reportWebVitals';
const Formulario = ReactDOM.createRoot(document.getElementById('formulario'));
Formulario.render(
  <React.StrictMode>
    <Mostrar />
    
  </React.StrictMode>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Fet/>
  <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

reportWebVitals();
