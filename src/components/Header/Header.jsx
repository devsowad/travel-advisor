import { AppBar, Box, InputBase, Toolbar, Typography } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
// import { Autocomplete } from '@material-ui/lab';
import React from 'react';

import useStyles from './style';

const Header = () => {
  const {
    toolbar,
    title,
    search,
    searchIcon,
    inputInput,
    inputRoot,
    subtitle,
  } = useStyles();

  return (
    <AppBar position='static'>
      <Toolbar className={toolbar}>
        <Typography variant='h5' className={title}>
          Travel Advisor
        </Typography>
        <Box display='flex'>
          <Typography variant='h6' className={subtitle}>
            Explore new places
          </Typography>
          {/* <Autocomplete> */}
          <div className={search}>
            <div className={searchIcon}>
              <SearchOutlined />
            </div>
            <InputBase
              placeholder='Search...'
              classes={{ root: inputRoot, input: inputInput }}
            />
          </div>
          {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
