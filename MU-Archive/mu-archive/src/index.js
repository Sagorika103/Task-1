
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';


// import './index.css';
// import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <BrowserRouter>
//   <App />
//   </BrowserRouter>,
//   root
// );

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter}from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
<App />
</BrowserRouter>,

document.getElementById('root'));
