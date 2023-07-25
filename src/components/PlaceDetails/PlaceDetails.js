import React from 'react';
import { Box, Typography, Card, CardMedia, CardContent } from '@material-ui/core';
// import LocationOnIcon from '@material-ui/icons/LocationOn';
// import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles.js';

const PlaceDetails = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const classes = useStyles();

  return (
    <div style={{ overflow: 'hidden' }}>
      <Card elevation={6} className={classes.card}>
        <CardMedia
          className={classes.media}
          image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
          title={place.name}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h7">{place.name}</Typography>
          <Box display="flex" alignItems="center">
            <Rating name="read-only" value={Number(place.rating)} readOnly className={classes.rating} />
            <Typography component="legend">{place.num_reviews}{place.num_reviews > 1 && 's'}</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography gutterBottom variant="h7" component="legend">Price</Typography>
            <Typography gutterBottom variant="subtitle1">
              {place.price_level}
            </Typography>
          </Box>
          {/* <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography component="legend">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
          </Box> */}
          {place?.awards?.map((award) => (
            <Box display="flex" justifyContent="space-between" my={1} alignItems="center">
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
            </Box>
          ))}
          {/* {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
          ))} */}
          {place.address && (
            <Typography gutterBottom variant="subtitle2" color="textSecondary" className={classes.subtitle}>
              {place.address}
            </Typography>
          )}
          {/* {place.phone && (
            <Typography variant="body2" color="textSecondary" className={classes.spacing}>
              <PhoneIcon /> {place.phone}
            </Typography>
          )} */}
        </CardContent>
      </Card>
    </div>
  );
};

export default PlaceDetails;
