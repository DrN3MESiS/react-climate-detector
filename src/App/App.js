import React from 'react';
import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';
import Loader from './components/Loader/Loader';

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

  renderContent() {
    if (this.state.errMsg && !this.state.lat) {
      return (
        <React.Fragment>
          <div>Error: {this.state.errMsg}</div>
        </React.Fragment>
      );
    } else if (this.state.lat && !this.state.errMsg) {
      return (
        <React.Fragment>
          <SeasonDisplay lat={this.state.lat} />
        </React.Fragment>
      );
    } else if (!this.state.errMsg && !this.state.lat) {
      return (
        <React.Fragment>
          <Loader content="Loading your location... (Please allow us to use your location by accepting the request)" />
        </React.Fragment>
      );
    }
  }

  //Basic equirement
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
