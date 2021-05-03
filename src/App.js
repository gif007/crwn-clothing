import React from 'react';

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

// import main app styles
import './App.css';

// import redux selectors
import { selectCurrentUser } from './redux/user/user.selectors';

// import reselect wrapper
import { createStructuredSelector } from 'reselect';

import { checkUserSession } from './redux/user/user.actions';


class App extends React.Component {

  unsubscribeFromAuth = null; // instantiate unsubscribe attribute for firebase auth

  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  // componentWillUnmount() {
  //   // unsubscribe from firebase auth listener on component destruction
  //   this.unsubscribeFromAuth();
  // }

  render() {
    // renders a header component and appropriate page based on URI
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() =>
            this.props.currentUser ? (
            <Redirect to='/' />
            ) : (
            <SignInAndSignUpPage />)}
          />
        </Switch>
      </div>
    )
  }
}

// pass currentUser from state into app component
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
