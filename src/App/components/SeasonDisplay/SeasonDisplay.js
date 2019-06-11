import '../../resources/css/SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: "It's hot as fuck!",
    iconName: 'sun',
    color: 'orange',
  },
  winter: {
    text: "It's fucking cold!",
    iconName: 'snowflake',
    color: 'blue',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName, color } = seasonConfig[season];
  return (
    <div
      align="CENTER"
      style={{ paddingTop: 1 + 'rem' }}
      className={`season-display ${season}`}
    >
      <i
        aria-hidden="true"
        className={`${iconName} icon-left loading icon massive ${color}`}
      />
      <h1 className="mainText">{text}</h1>
      <i
        aria-hidden="true"
        className={`${iconName} icon-right loading icon massive ${color}`}
      />
    </div>
  );
};

export default SeasonDisplay;
