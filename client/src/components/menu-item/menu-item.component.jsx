// import react library
import React from 'react';

// import withRouter HoC to get props from router
import { withRouter } from 'react-router-dom';

// import styled containers
import {
    MenuItemContainer,
    BackgroundImageContainer,
    MenuItemContentContainer,
    MenuItemTitle,
    MenuItemSubtitle
} from './menu-item.styles';


// returns a menu item component for the directory which takes user to a collections page
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <BackgroundImageContainer
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>
        </BackgroundImageContainer>
        <MenuItemContentContainer>
            <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
            <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
        </MenuItemContentContainer>
    </MenuItemContainer>
)

export default withRouter(MenuItem);