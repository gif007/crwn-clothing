// import react library
import React, { Profiler } from 'react';

// import directory component which will render collection category previews
import Directory from '../../components/directory/directory.component';

// import styled container
import { HomePageContainer } from './homepage.styles';


// returns a HomePage component which renders a directory for the app
const HomePage = () => (
    <HomePageContainer>
        <Profiler id='Directory' onRender={(id, phase, actualDuration) => {
            console.log({
                id,
                phase,
                actualDuration
            });
        }}>
            <Directory />
        </Profiler>
    </HomePageContainer>
);

export default HomePage;