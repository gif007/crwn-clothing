// import react library
import React from 'react';

// import menu item component
import MenuItem from '../menu-item/menu-item.component';

// import styled container
import { DirectoryMenuContainer } from './directory.styles';

// import connect HoC from redux
import { connect } from 'react-redux';

// import createstructuredselector method of reselect
import { createStructuredSelector } from 'reselect';

// import directory sections selector
import { selectDirectorySections } from '../../redux/directory/directory.selector';


// returns a directory component for the homepage which displays sections links
const directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {
      sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
      ))
    }
  </DirectoryMenuContainer>
)


// get directory sections
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(directory);
