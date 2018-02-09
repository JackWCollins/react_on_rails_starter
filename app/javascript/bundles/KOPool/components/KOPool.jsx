import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'semantic-ui-react'
import FixedMenuLayout from './FixedMenuLayout'
import { BrowserRouter } from 'react-router-dom'

export default class KOPool extends React.Component {
  static propTypes = {
    season: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      season: this.props.season,
      smallLogoPath: this.props.small_logo_path
    };
  };

  updateSeason = (season) => {
    this.setState({ season });
  };

  render() {
    return (
      <FixedMenuLayout smallLogoPath={this.props.small_logo_path}/>
    );
  }
}