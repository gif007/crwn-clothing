// import react library
import React from 'react';

// import styled container
import { CollectionOverviewContainer } from './collections-overview.styles';

// import connect HoC from redux
import { connect } from 'react-redux';

// import createstructuredselector method of reselect
import { createStructuredSelector } from 'reselect';

// import collection preview component
import CollectionPreview from '../collection-preview/collection-preview.component';

// import collections for preview selector
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';


// returns a collections overview component which displays a preview for each collection
const CollectionsOverview = ({ collections }) => (
    <CollectionOverviewContainer>
        {
            collections.map(({ id, ...otherCollectionsProps }) => (
                <CollectionPreview key={id} {...otherCollectionsProps} />
            ))
        }
    </CollectionOverviewContainer>
)


// gets the collections preview data
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);