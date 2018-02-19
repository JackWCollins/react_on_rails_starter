import PropTypes from 'prop-types';
import React from 'react';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import Home from './Home'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
import { NavBar } from "./NavBar";
import { UserProfile } from "./UserProfile";

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

  };

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     season: this.props.season
  //   };
  // };

  render() {
    // const nflTeams = this.props.nflTeamsQuery.nfl_teams;

    return (
      <div>
        <NavBar></NavBar>
        <Container text style={{ marginTop: '7em' }}>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={UserProfile} />
        </Container>
        <Segment
          inverted
          vertical
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        >
          <Container textAlign='center'>
            <List horizontal inverted divided link>
              <List.Item as='a' href='#'>Contact Us</List.Item>
              <List.Item as='a' href='#'>Terms and Conditions</List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    );
  }
}

export default graphql(NFL_TEAMS_QUERY, {name: 'nflTeamsQuery'}) (KOPool)