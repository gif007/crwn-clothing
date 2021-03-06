import styled, { css } from 'styled-components';

const getSize = props => {
    if (props.size) {
        return css`height: 380px;`;
    }
}

export const BackgroundImageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
`;

export const MenuItemContentContainer = styled.div`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;
`;

export const MenuItemContainer = styled.div`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & ${BackgroundImageContainer} {
            transform: scale(1.1);
            transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
        }

        & ${MenuItemContentContainer} {
            opacity: 0.9;
        }
    }

    &:first-child {
        margin-right: 7.5px;
    }

    &:last-child {
        margin-left: 7.5px;
    }

    ${getSize}

    @media screen and (max-width: 800px) {
        height: 200px;
    }
`;

export const MenuItemTitle = styled.h1`
    font-weight: bold;
    margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

export const MenuItemSubtitle = styled.span`
    font-weight: lighter;
    font-size: 16px;
`;