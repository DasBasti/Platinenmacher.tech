import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopNavigation from './components/Navigation'

import Info from './screens/Info';
import PCB from './screens/PCB';

ReactDOM.render(
  <BrowserRouter>
  <TopNavigation />
  <Routes>
    <Route path="/info" element={<Info />} />
    <Route path="/pcb" element={<PCB />}/>
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
