import React from 'react';

const Loader = props => {
  return (
    <React.Fragment>
      <div className="ui active transition visible inverted dimmer">
        <div className="content">
          <div className="ui inverted text loader massive">{props.content}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

Loader.defaultProps = {
  content: 'Loading...',
};

export default Loader;
