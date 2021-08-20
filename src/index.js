import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Hello from './component/Hello'
import Movie from './component/Movie'
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Provider store={store}>
    {/* <Hello name="Tidlor" />   */}
    <Movie/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
