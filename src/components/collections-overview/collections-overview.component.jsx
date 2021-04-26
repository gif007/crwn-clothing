// import react library
import React from 'react';

// import styles
import './collections-overview.styles.scss';

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
    <div className='collections-overview'>
        {
            collections.map(({ id, ...otherCollectionsProps }) => (
                <CollectionPreview key={id} {...otherCollectionsProps} />
            ))
        }
    </div>
)


// gets the collections preview data
const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);