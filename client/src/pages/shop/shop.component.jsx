// import react library
import React, { useEffect, lazy, Suspense } from 'react';

// import route function of react router
import { Route } from 'react-router-dom';

// import connect HoC of redux
import { connect } from 'react-redux';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionsPageContainer = lazy(() => import('../collection/collection.container'));


// shop page router component which directs users to appropriate collection page
const ShopPage = ({ match, fetchCollectionsStart }) =>  {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);


    // load component based on url parameters
    return (
        <div className="shop-page">
            <Suspense fallback={<Spinner />}>
                <Route
                        exact
                        path={`${match.path}`}
                        component={CollectionsOverviewContainer}
                    />
                    <Route
                        path={`${match.path}/:collectionId`}
                        component={CollectionsPageContainer}
                    />
            </Suspense>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);