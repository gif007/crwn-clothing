// import react library
import React, { useEffect } from 'react';

// import route function of react router
import { Route } from 'react-router-dom';

// import connect HoC of redux
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import CollectionsPageContainer from '../collection/collection.container';


// shop page router component which directs users to appropriate collection page
const ShopPage = ({ match, fetchCollectionsStart }) =>  {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);


    // load component based on url parameters
    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionsPageContainer}
            />
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);