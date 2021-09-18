import {
  FormControl,
  InputLabel,
  Select,
  Typography,
  MenuItem,
  Grid,
} from '@material-ui/core';
import React, { useState } from 'react';
import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './style';

const List = ({ places }) => {
  const { container, formControl, list, loading, marginBottom, selectEmpty } =
    useStyles();

  const [type, setType] = useState('restaurant');
  const [rating, setRating] = useState(0);

  return (
    <div className={container}>
      <Typography variant='h5'>
        Restaurant, Hotels & Attractions around you
      </Typography>
      <FormControl variant='filled' className={formControl}>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={e => setType(e.target.value)}>
          <MenuItem value='restaurant'>Restaurant</MenuItem>
          <MenuItem value='hotels'>Hotels</MenuItem>
          <MenuItem value='attractions'>Attractions</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant='filled' className={formControl}>
        <InputLabel>Rating</InputLabel>
        <Select value={rating} onChange={e => setRating(e.target.value)}>
          <MenuItem value={0}>All</MenuItem>
          <MenuItem value={3}>Above 3.0</MenuItem>
          <MenuItem value={4}>Above 4.0</MenuItem>
          <MenuItem value={4.5}>Above 4.5</MenuItem>
        </Select>
      </FormControl>

      <Grid container spacing={3} className={list}>
        {places?.map(
          (place, i) =>
            place.name && (
              <Grid item key={`${place.name}-restaurant`} xs={12}>
                <PlaceDetails place={place} />
              </Grid>
            )
        )}
      </Grid>
    </div>
  );
};

export default List;
