import React, { useEffect } from 'react';

// import react routing components
import { Switch, Route, Redirect } from 'react-router-dom';

// import page components
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

// import app header component
import Header from './components/header/header.component';

// import connect HoC from redux
import { connect } from 'react-redux';

import { GlobalStyle } from './global.styles';

// import redux selectors
import { selectCurrentUser } from './redux/user/user.selectors';

// import reselect wrapper
import { createStructuredSelector } from 'reselect';

import { checkUserSession } from './redux/user/user.actions';


const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])
  
  // renders a header component and appropriate page based on URI
  return (
    <div>
    <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" render={() =>
          currentUser ? (
          <Redirect to='/' />
          ) : (
          <SignInAndSignUpPage />)}
        />
      </Switch>
    </div>
  )
}


// pass currentUser from state into app component
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
