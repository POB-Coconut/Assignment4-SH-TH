import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import store from './store';

function App() {
  return (
    <div className={styles.wrapper}>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

const styles = {
  wrapper: 'relative max-w-screen-sm p-4 mx-auto',
};

export default App;
