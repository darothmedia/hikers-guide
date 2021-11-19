import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = ({ children }) => (
  <div>
    <Switch>
      <Route path='/signup' component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;