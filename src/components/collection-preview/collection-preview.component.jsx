// import react library
import React from 'react';

// import styles
import './collection-preview.styles.scss';

// import collection item component
import CollectionItem from '../collection-item/collection-item.component';


// returns a collection preview component which displays a collection item for the first 4 items in collection
const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {
                items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;