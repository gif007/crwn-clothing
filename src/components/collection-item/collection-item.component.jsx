// import react library
import React from 'react';

//import styles
import './collection-item.styles.scss';

// import custom button component
import CustomButton from '../custom-button/custom-button.component';

// import connect HoC from redux
import { connect } from 'react-redux';

// import cart action to add item to cart
import { addItem } from '../../redux/cart/cart.actions';


// returns a shop collection item which display item details and adds item to cart when clicked
const CollectionItem = ({ item, addItem }) => {
    const {name, price, imageUrl} = item;
    return (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>${ price }</span>
        </div>
        <CustomButton onClick={() => addItem(item)} inverted>
            Add to cart
        </CustomButton>
    </div>)
};


// passes in dispatch action to add item to cart
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);