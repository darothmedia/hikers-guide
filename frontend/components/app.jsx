import React from 'react';
import { Route, Routes } from 'react-router';
import SignUpFormContainer from './users/sign_up_form_container'

const App = ({ children }) => (
  <div>
    <Routes>
      <Route path='/signup' element={<SignUpFormContainer />} />
    </Routes>
  </div>
);

export default App;