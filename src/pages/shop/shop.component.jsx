// import react library
import React from 'react';

// import route function of react router
import { Route } from 'react-router-dom';

// import collections list view and collection detail view components
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

// shop page router component which directs users to appropriate collection page
class ShopPage extends React.Component {
    // initiate state
    state = {
        loading: true
    };

    // initiate unsubscribeFromSnapshot variable
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            updateCollections(convertCollectionsSnapshotToMap(snapshot));
            this.setState({ loading: false });
        })
    }

    componentWillUnmount() {
        // cancel snapshot listener on component destruction
        this.unsubscribeFromSnapshot();
    }

    render () {
        // get match and loading object from props
        const { match } = this.props;
        const { loading } = this.state;

        // load component based on url parameters
        return (
            <div className="shop-page">
                <Route
                    exact
                    path={`${match.path}`}
                    render={(props) => (
                        <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
                    )}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    render={(props) => (
                        <CollectionsPageWithSpinner isLoading={loading} {...props} />
                    )}
                />
            </div>
        );
    }
} 

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage);