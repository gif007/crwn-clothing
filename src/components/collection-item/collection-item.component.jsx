// import react library
import React from 'react';

// import styled containers
import {
    CollectionItemContainer,
    CollectionItemImageContainer,
    CollectionFooterContainer,
    CollectionItemNameContainer,
    CollectionItemPriceContainer,
    AddToCartContainer
} from './collection-item.styles';

// import connect HoC from redux
import { connect } from 'react-redux';

// import cart action to add item to cart
import { addItem } from '../../redux/cart/cart.actions';


// returns a shop collection item which display item details and adds item to cart when clicked
const CollectionItem = ({ item, addItem }) => {
    const {name, price, imageUrl} = item;
    return (
    <CollectionItemContainer>
        <CollectionItemImageContainer
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <CollectionFooterContainer>
            <CollectionItemNameContainer>{ name }</CollectionItemNameContainer>
            <CollectionItemPriceContainer>${ price }</CollectionItemPriceContainer>
        </CollectionFooterContainer>
        <AddToCartContainer onClick={() => addItem(item)} inverted>
            Add to cart
        </AddToCartContainer>
    </CollectionItemContainer>)
};


// passes in dispatch action to add item to cart
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);