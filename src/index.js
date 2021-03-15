// import React from 'react';
// import ReactDOM from 'react-dom';
 import './styles/sass/main.scss';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const topHeaderNav = document.getElementById('top-header__nav');
document.getElementById('hamburger').addEventListener("click",(e)=>{
    const hamburger = e.target;
    hamburger.classList.toggle("close")
    topHeaderNav.classList.toggle("active")
})
  
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
