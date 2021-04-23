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
// import firebase utilities
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import connect HoC from redux
import { connect } from 'react-redux';
// import redux dispatch action to set current user
import { setCurrentUser } from './redux/user/user.actions';
// import main app styles
import './App.css';
// import redux selectors
import { selectCurrentUser } from './redux/user/user.selectors';
// import reselect wrapper
import { createStructuredSelector } from 'reselect';


class App extends React.Component {

  unsubscribeFromAuth = null; // instantiate unsubscribe attribute for firebase auth

  componentDidMount() {
    const {setCurrentUser} = this.props; // get dispatch action from redux
    // set up listener for firebase auth system
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth); // create profile if needed

        userRef.onSnapshot(snapShot => {
          // set currentUser in redux store with user data from firebase
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else { // if no user is authenticated userAuth will return null
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    // unsubscibe from firebase auth listener on component destruction
    this.unsubscribeFromAuth();
  }

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

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

// provides dispatching capabilities to App component
// in order to set the currentUser attribute on the user store
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
