import React, { useState } from 'react';
import { AppBar, Toolbar, InputBase, Box, FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@react-google-maps/api';
import useStyles from './styles.js';

const Header = ({ onPlaceChanged, onLoad }) => {
  const classes = useStyles();
  const [type, setType] = useState('');
  const [rating, setRating] = useState('');

  // You can add any other logic or functions needed for the Header component

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        {/* Enter Date Element */}
        <div className={classes.enterDate}>
          <input type="date" placeholder="Enter Date" className={classes.dateInput} />
        </div>

        {/* Empty space between Enter Date and Search Bar */}
        <div className={classes.emptySpace} />

        {/* Search Bar */}
        <Box display="flex">
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Where to?"
                classes={{ root: classes.inputRoot, input: classes.inputInput }}
              />
            </div>
          </Autocomplete>
        </Box>

        {/* Type Selector */}
        <FormControl className={classes.formControl}>
          <InputLabel id="type">Type</InputLabel>
          <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>

        {/* Rating Selector */}
        <FormControl className={classes.formControl}>
          <InputLabel id="rating">Rating</InputLabel>
          <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="3">Above 3.0</MenuItem>
            <MenuItem value="4">Above 4.0</MenuItem>
            <MenuItem value="4.5">Above 4.5</MenuItem>
          </Select>
        </FormControl>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
