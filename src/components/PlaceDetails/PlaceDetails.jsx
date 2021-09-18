import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from '@material-ui/core';
import { LocationOn, Phone } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';
import React from 'react';

import useStyles from './style';

const PlaceDetails = ({ place }) => {
  const { chip, subtitle, spacing } = useStyles();

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant='body1'>
          {place.name}
        </Typography>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle2'>Price</Typography>
          <Typography gutterBottom variant='subtitle2'>
            {place.price}
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant='subtitle2'>
            out of {place.num_ratings} ratings
          </Typography>
        </Box>
        <Box display='flex' justifyContent='space-between'>
          <Typography variant='subtitle2'>Ranking</Typography>
          <Typography variant='subtitle2'>{place.ranking}</Typography>
        </Box>
        {place.awards?.map(award => (
          <Box
            key={`award-${award.display_name}`}
            my={1}
            display='flex'
            justifyContent='space-between'
          >
            <img src={award.images.small} alt={award.display_name} />
            <Typography color='textSecondary' variant='subtitle2'>
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place.cuisine?.map(({ name }) => (
          <Chip key={name} size='small' label={name} className={chip} />
        ))}
        {place.address && (
          <Typography
            gutterBottom
            variant='subtitle2'
            color='textSecondary'
            className={subtitle}
          >
            <LocationOn /> {place.address}
          </Typography>
        )}
        {place.phone && (
          <Typography
            gutterBottom
            variant='subtitle2'
            color='textSecondary'
            className={spacing}
          >
            <Phone /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button color='primary' target='_blank' href={place.web_url}>
            Trip Advisor
          </Button>
          <Button color='secondary' target='_blank' href={place.website}>
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
