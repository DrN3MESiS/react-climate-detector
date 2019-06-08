import React from 'react';
import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    position => console.log(position),
    failure => console.log(failure),
  );

  return (
    <React.Fragment>
      <div />
    </React.Fragment>
  );
};

export default App;
