import styled, { css } from 'styled-components';

const CommonWidth = css`
    width: 23%;

    @media screen and (max-width: 800px) {
        width: 22%;
    }
`;

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;


    @media screen and (max-width: 800px) {
    font-size: 18px;
    }
`;

export const CheckoutItemImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
`;

export const CheckoutItemImageWrapper = styled.img`
    width: 100%;
    height: 100%;
`;

export const CheckoutItemNameContainer = styled.span`
    ${CommonWidth}
`;

export const CheckoutItemQuantityContainer = styled.span`
    ${CommonWidth}
    display: flex;
`;

export const CheckoutItemQuantityValueContainer = styled.span`
    margin: 0 10px;
`;

export const CheckoutItemPriceContainer = styled.span`
    ${CommonWidth}
`;

export const ArrowContainer = styled.div`
    cursor: pointer;
`;

export const RemoveButtonContainer = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;