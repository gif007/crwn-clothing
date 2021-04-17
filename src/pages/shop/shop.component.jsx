import React from 'react';
// import shop data from js file
import SHOP_DATA from './shop.data';
// import CollectionPreview to display shop data
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

class ShopPage extends React.Component {
    constructor(props) {
        super(props);
        // ShopPage state contains data for all shop products
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        // renders a set of CollectionPreview components based on shop data
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({ id, ...otherCollectionsProps }) => (
                        <CollectionPreview key={id} {...otherCollectionsProps} />
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;