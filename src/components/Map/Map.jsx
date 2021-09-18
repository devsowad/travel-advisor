import React from 'react';
import useStyles from './style';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import { Rating } from '@material-ui/lab';

const Map = ({ coordinates, setCoordinates, setBounds, places }) => {
  const { paper, mapContainer, markerContainer, pointer } = useStyles();

  const isDesktop = useMediaQuery('(min-width:600px)');

  return (
    <div className={mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCrOo97nScdVuoD-pSgtlixCs4ZZlTpRMk' }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={''}
        onChange={e => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
      >
        {places?.map(
          (place, i) =>
            place.name && (
              <div
                className={markerContainer}
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={i}
              >
                {!isDesktop ? (
                  <LocationOnOutlined color='primary' fontSize='large' />
                ) : (
                  <Paper elevation={3} className={paper}>
                    <Typography variant='subtitle2' gutterBottom>
                      {place.name}
                    </Typography>
                    <img
                      className={pointer}
                      src={
                        place.photo
                          ? place.photo.images.large.url
                          : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'
                      }
                      alt={place.name}
                    />
                    <Rating
                      size='small'
                      value={Number(place.rating)}
                      readOnly
                    />
                  </Paper>
                )}
              </div>
            )
        )}
      </GoogleMapReact>
      {/* onChildClick={''} */}
    </div>
  );
};

export default Map;
