// import react library
import React from 'react';

// import styled containers
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';

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
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to="/shop">
                SHOP
            </OptionLink>
            <OptionLink to="/shop">
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut()}>
                    SIGN OUT
                </OptionLink>
                ) : (
                <OptionLink to="/signin">
                    SIGN IN
                </OptionLink>
                )
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null
            : <CartDropdown />
        }
    </HeaderContainer>
)


// get the current user and cart hidden properties
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);