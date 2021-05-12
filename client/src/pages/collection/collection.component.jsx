// import react library
import React from 'react';


// import styled containers
import { CollectionPageContainer, ItemsContainer, TitleContainer } from './collection.styles';

// import collection item preview component 
import CollectionItem from '../../components/collection-item/collection-item.component';

// import connect HoC from redux
import { connect } from 'react-redux';

// import selectcollection selector to grab specific collection based on url parameter
import { selectCollection } from '../../redux/shop/shop.selectors';


// return a collection page component which displays all items of a specific collection
const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    return (
    <CollectionPageContainer>
        <TitleContainer>{ title.toUpperCase() }</TitleContainer>
        <ItemsContainer>
            {
                items.map(item => (
                    <CollectionItem
                        key={item.id}
                        item={item}
                    />
                ))
            }
        </ItemsContainer>
        
    </CollectionPageContainer>
)};


// get collection array based on url params
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);