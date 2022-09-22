// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';

import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/greeting';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <h1>Greetings App!</h1>
          <Routes>
            <Route path="/" element={<Greeting />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
