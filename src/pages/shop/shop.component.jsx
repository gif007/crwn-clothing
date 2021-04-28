// import react library
import React from 'react';

// import route function of react router
import { Route } from 'react-router-dom';

// import collections list view and collection detail view components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

// import connect HoC of redux
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

// shop page router component which directs users to appropriate collection page
class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;

        fetchCollectionsStartAsync();
    }


    render () {
        // get match object from props
        const { match, isCollectionFetching, isCollectionLoaded } = this.props;

        // load component based on url parameters
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => (
                        <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
                    )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionsPageWithSpinner isLoading={!isCollectionLoaded} {...props} />
                    )}
                />
            </div>
        );
    }
} 

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

const mapStateToProps = createStructuredSelector({
    isCollectionFetching: selectIsCollectionFetching,
    isCollectionLoaded: selectIsCollectionsLoaded
});


export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);