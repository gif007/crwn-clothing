// import react library
import React from 'react';

// import styles
import './header.styles.scss';

// import router link component
import { Link } from 'react-router-dom';

// import company logo as react component called Logo
import { ReactComponent as Logo } from '../../assets/crown.svg';

// import auth api from firebase
import { auth } from '../../firebase/firebase.utils';

// import connect HoC from redux
import { connect } from 'react-redux';

// import cart icon component
import CartIcon from '../cart-icon/cart-icon.component';

// import cart dropdown component
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

// import createstructuredselector method of reselect
import { createStructuredSelector } from 'reselect';

// import user and cart selectors to get current user and cart hidden status
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'


// returns a header component with company logo, navigation and sign in / out links
const Header = ({ currentUser, hidden }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                SHOP
            </Link>
            <Link className="option" to="/shop">
                CONTACT
            </Link>
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>
                    SIGN OUT
                </div>
                ) : (
                <Link className="option" to="/signin">
                    SIGN IN
                </Link>
                )
            }
            <CartIcon />
        </div>
        {
            hidden ? null
            : <CartDropdown />
        }
    </div>
)


// get the current user and cart hidden properties
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);