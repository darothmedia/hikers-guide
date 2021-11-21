import React from 'react';
import { Route, Routes } from 'react-router';
import SignUpFormContainer from './users/sign_up_form_container'
import SplashContainer from './splash/splash_container'
import Navbar from './navbar/navbar';
import LogInFormContainer from './users/log_in_form_container'

const App = ({ children }) => (
  <div>
    <header>
      <Navbar />
    </header>
    <Routes>
      {/* <Route exact path='/login' element={<LogInFormContainer />} /> */}
      <Route path='/signup' element={<SignUpFormContainer />} />
      <Route path='/login' element={<LogInFormContainer />} />
      <Route exact path='/' element={<SplashContainer />} />
    </Routes>
  </div>
);

export default App;