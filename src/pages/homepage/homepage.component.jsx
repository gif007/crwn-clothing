import React from 'react';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

// returns a HomePage component which renders a directory for the app
const HomePage = () => (
    <div className="homepage">
        <Directory />
    </div>
)

export default HomePage;