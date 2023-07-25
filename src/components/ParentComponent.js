import React, { useState, useEffect, createRef } from 'react';
import { CircularProgress, Grid, InputLabel, MenuItem, FormControl, Select, AppBar, Toolbar, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { Autocomplete } from '@react-google-maps/api';

import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from './styles.js';
import Header from './Header';

const ParentComponent = () => {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');
  const [places, setPlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [elRefs, setElRefs] = useState([]);
  const classes = useStyles();

  // ... Fetch places data and handle loading ...

  useEffect(() => {
    setElRefs((refs) => Array(places.length).fill().map((_, i) => refs[i] || createRef()));
  }, [places]);

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Header
          onPlaceChanged={(place) => console.log(place)} // Add your onPlaceChanged function here
          onLoad={() => console.log('map loaded')} // Add your onLoad function here
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
        />
      </AppBar>

      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <Grid container spacing={3} className={classes.list}>
          {places?.map((place, i) => (
            <Grid ref={elRefs[i]} key={i} item xs={12}>
              <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default ParentComponent;
