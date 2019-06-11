import React from 'react';
//import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';

class App extends React.Component {
  state = { lat: null, errMsg: '' };

  componentDidMount() {
    console.log('Getting user location...');
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
        console.log('Success');
      },
      err => {
        this.setState({
          errMsg: err.message,
        });
        console.log('Error, user did not accept the request');
      },
    );
  }

  componentDidUpdate() {
    console.log('Data has been updated...');
  }

  //Basic equirement
  render() {
    if (this.state.errMsg && !this.state.lat) {
      return (
        <React.Fragment>
          <div>Error: {this.state.errMsg}</div>
        </React.Fragment>
      );
    } else if (this.state.lat && !this.state.errMsg) {
      return (
        <React.Fragment>
          <div>Latitude: {this.state.lat}</div>
        </React.Fragment>
      );
    } else if (!this.state.errMsg && !this.state.lat) {
      return (
        <React.Fragment>
          <div>Latitude: Loading...</div>
        </React.Fragment>
      );
    }
  }
}

export default App;
