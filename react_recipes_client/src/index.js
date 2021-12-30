import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { configureStore } from '@reduxjs/toolkit'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
  );
  