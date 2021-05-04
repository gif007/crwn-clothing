// import styled components library
import styled from 'styled-components';

// import Link component from react router
import { Link } from 'react-router-dom';


// export header container
export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

// export logo container
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

// export overall options container
export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

// export individual option container as Link component
export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`;