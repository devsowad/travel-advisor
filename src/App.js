import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { getPlaceData } from './api/index';

const App = () => {
  const [places, setPlaces] = useState([]);

  const [coordinates, setCoordinates] = useState();
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    bounds.sw &&
      getPlaceData(bounds.sw, bounds.ne).then(data => {
        console.log(data);
        setPlaces(data);
      });
  }, [coordinates, bounds]);

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <List places={places} />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={places}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default App;
