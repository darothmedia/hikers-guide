import React from 'react';
import { Route, Switch } from 'react-router';
import SignUpFormContainer from './users/sign_up_form_container'
import SplashContainer from './splash/splash_container'
import NavbarContainer from './navbar/navbar_container'
import LogInFormContainer from './users/log_in_form_container'
import ExploreContainer from './explore/explore_container'
import Footer from './splash/footer';
import TrailPageContainer from './trails/trail_page_container'
import ParkPageContainer from './parks/park_page_container'
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import ReviewFormContainer from './reviews/review_form_container';
import EditReviewContainer from './reviews/edit_review_container';

const App = ({ children }) => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <AuthRoute path='/signup' component={SignUpFormContainer} />
      <AuthRoute path='/login' component={LogInFormContainer} />
      <ProtectedRoute path='/trails/:trailId/reviews/:reviewId/edit' component={EditReviewContainer} />
      <ProtectedRoute path='/trails/:trailId/reviews' component={ReviewFormContainer} />
      <Route path='/explore' component={ExploreContainer} />
      <Route path='/trails/:trailId' component={TrailPageContainer}/>
      <Route path='/trails' component={ExploreContainer} />
      <Route path='/parks/:parkId' component={ParkPageContainer} />
      <Route path='/' component={SplashContainer} />
    </Switch>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;