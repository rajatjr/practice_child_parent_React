import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Update from './Components/Update';
// import Test from './Components/Test';
// import Prictice from './Components/Prictice';
// import Reacttest from './Components/Reacttest';
// import Today from './Components/Today';
// import PracticeToday from './Components/PracticeToday';
import Filter from './Components/Filter';
// import Ab from './Components/Ab';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Update />
    <Test />
    <Prictice /> */}
    {/* <Reacttest /> */}
    {/* <Today /> */}
    {/* <PracticeToday /> */}
    <Filter />
    {/* <Ab /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
