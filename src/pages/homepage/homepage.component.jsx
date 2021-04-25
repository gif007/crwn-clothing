// import react library
import React from 'react';

// import directory component which will render collection category previews
import Directory from '../../components/directory/directory.component';

// import styles
import './homepage.styles.scss';

// returns a HomePage component which renders a directory for the app
const HomePage = () => (
    <div className="homepage">
        <Directory />
    </div>
)

export default HomePage;