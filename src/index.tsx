import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './core/store/store';

store()
  .then((s) => {
    ReactDOM.render(
      <Provider store={s}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>,
      document.getElementById('root')
    );
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.log(error);
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
