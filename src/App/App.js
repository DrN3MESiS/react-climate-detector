import React from 'react';
//import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      failure => console.log(failure),
    );
  }

  //Basic equirement
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Latitude: {this.state.lat}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
