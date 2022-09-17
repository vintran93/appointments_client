import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers/rootReducer'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk),
    window._REDUX_DEVTOOLS_EXTENSION && window._REDUX_DEVTOOLS_EXTENSION())
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <AlertProvider template={AlertTemplate}>
        <App />
      </AlertProvider>
    </Router>
  </Provider>
);












