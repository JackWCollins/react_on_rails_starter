import PropTypes from 'prop-types';
import React from 'react';

export default class KOPool extends React.Component {
  static propTypes = {
    season: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = { season: this.props.season };
  }

  updateSeason = (season) => {
    this.setState({ season });
  }

  render() {
    return (
      <div>
        <h3>Welcome to KO Pool</h3>
      </div>
    );
  }
}