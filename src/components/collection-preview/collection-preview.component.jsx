// import react library
import React from 'react';

// import styled containers
import { CollectionPreviewContainer, CollectionPreviewTitle, CollectionPreviewPreview } from './collection-preview.styles';

// import collection item component
import CollectionItem from '../collection-item/collection-item.component';


// returns a collection preview component which displays a collection item for the first 4 items in collection
const CollectionPreview = ({ title, items }) => (
    <CollectionPreviewContainer>
        <CollectionPreviewTitle>{title.toUpperCase()}</CollectionPreviewTitle>
        <CollectionPreviewPreview>
            {
                items
                    .filter((item, index) => index < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                ))
            }
        </CollectionPreviewPreview>
    </CollectionPreviewContainer>
)

export default CollectionPreview;