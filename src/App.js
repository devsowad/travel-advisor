import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlaceData } from './api/index';

const App = () => {
  const [places, setPlaces] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState(0);

  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState({});

  const [childClick, setChildClick] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds.sw) {
      setIsLoading(true);
      getPlaceData(type, rating, bounds.sw, bounds.ne).then(data => {
        setPlaces(data);
        setIsLoading(false);
      });
    }
  }, [coordinates, bounds, type, rating]);

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <List
              isLoading={isLoading}
              places={places}
              childClick={childClick}
              type={type}
              setType={setType}
              rating={rating}
              setRating={setRating}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
              setChildClick={setChildClick}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
