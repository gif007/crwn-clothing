import React from 'react';
import ReactDOM from 'react-dom';
// import router wrapper
import { BrowserRouter } from 'react-router-dom';
// import main index styling
import './index.css';
// import App component
import App from './App';
// import redux wrapper
import { Provider } from 'react-redux';
// import redux store
import store from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
