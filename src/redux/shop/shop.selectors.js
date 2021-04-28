// import memoize from lodash
import memoize from 'lodash.memoize';

// import createSelector method of reselect
import { createSelector } from 'reselect';


// get shop from state
const selectShop = state => state.shop;


// get collections from shop
export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
);


// return collections converted into an array
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => collections ? (
        Object.keys(collections).map(key => collections[key])
    ) : (
        []
    )
)


// select a specific collection based on title
export const selectCollection = memoize((collectionUrlParam) => (
    createSelector(
        [selectShopCollections],
        collections => collections ? collections[collectionUrlParam] : null
    )
));

export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
);