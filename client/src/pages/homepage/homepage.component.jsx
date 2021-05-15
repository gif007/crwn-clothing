// import react library
import React from 'react';

// import directory component which will render collection category previews
import Directory from '../../components/directory/directory.component';

// import styled container
import { HomePageContainer } from './homepage.styles';


// returns a HomePage component which renders a directory for the app
const HomePage = () => (
    <HomePageContainer>
        <Directory />
    </HomePageContainer>
);

export default HomePage;