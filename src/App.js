import React from 'react';

// context
import { AppProvider } from './context/AppContext';

// router
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// components
import { Add } from './components/Add';
import { Review } from './components/Review';

import './App.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
            <Switch>
              <Route path="/add">
                <Add />
              </Route>
              <Route path="/">
                <Review />
              </Route>
            </Switch>
          {/* <footer className="footer">
            <p>&copy;</p>
          </footer> */}
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
