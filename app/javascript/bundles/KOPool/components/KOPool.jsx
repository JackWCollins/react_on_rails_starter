import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'semantic-ui-react'
import FixedMenuLayout from './FixedMenuLayout'
import { BrowserRouter } from 'react-router-dom'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

const NFL_TEAMS_QUERY = gql`
  query NflTeamsQuery {
    nflTeams {
      id
      name
    }
  }
`;

class KOPool extends React.Component {
  static propTypes = {
    season: PropTypes.string
  };

  componentDidMount() {
    console.log("Mounted main KO Pool App")
  };

  constructor(props) {
    super(props);

    this.state = {
      season: this.props.season
    };
  };

  updateSeason = (season) => {
    this.setState({ season });
  };

  render() {
    // if (this.props.nflTeamsQuery && this.props.nflTeamsQuery.loading) {
    //   return '<div>Loading</div>'
    // }

    const nflTeams = this.props.nflTeamsQuery.nfl_teams;

    return (
      <FixedMenuLayout />
    );
  }
}

export default graphql(NFL_TEAMS_QUERY, {name: 'nflTeamsQuery'}) (KOPool)