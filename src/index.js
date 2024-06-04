import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';
// import reportWebVitals from './reportWebVitals';
ReactDOM.render(<ContextProvider> <App /> </ContextProvider>, document.getElementById('root'));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
    
//   </React.StrictMode>,
// );

// reportWebVitals();