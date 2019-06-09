import React from 'react';
//import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  //Basic equirement
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      failure => console.log(failure),
    );

    return (
      <React.Fragment>
        <div>
          <h1>Loading...</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
