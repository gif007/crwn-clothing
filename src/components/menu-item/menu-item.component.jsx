// import react library
import React from 'react';

// import withRouter HoC to get props from router
import { withRouter } from 'react-router-dom';

// import styles
import './menu-item.styles.scss';


// returns a menu item component for the directory which takes user to a collections page
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}>
        </div>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
)

export default withRouter(MenuItem);