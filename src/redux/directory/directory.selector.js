// import createselector method of reselect
import { createSelector } from 'reselect';


// get directory from state
const selectDirectory = state => state.directory;


// get category sections from directory
export const selectDirectorySections = createSelector(
    [selectDirectory],
    (directory) => directory.sections
);