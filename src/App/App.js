import React from 'react';
//import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lat: null, errMsg: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({
          errMsg: err.message,
        });
      },
    );
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
