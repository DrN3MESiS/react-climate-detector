import React, { useState, useEffect } from 'react';
import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';
import Loader from './components/Loader/Loader';

const App = () => {
  const [lat, setLat] = useState(null);
  const [err, setErr] = useState('');
  useEffect(() => {
    console.log('Getting user location...');
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude),
      err => setErr(err.message),
    );
  }, []);

  let content;

  if (err && !lat) {
    content = (
      <React.Fragment>
        <div>Error: {err}</div>
      </React.Fragment>
    );
  } else if (lat && !err) {
    content = (
      <React.Fragment>
        <SeasonDisplay lat={lat} />
      </React.Fragment>
    );
  } else if (!err && !lat) {
    content = (
      <React.Fragment>
        <Loader content="Loading your location... (Please allow us to use your location by accepting the request)" />
      </React.Fragment>
    );
  }

  return content;
};

export default App;
