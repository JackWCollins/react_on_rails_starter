import PropTypes from 'prop-types';
import React from 'react';
import { Container, Divider, Dropdown, Grid, List, Menu, Segment } from 'semantic-ui-react'
import Home from './Home'
import { Route, Link } from 'react-router-dom'
import { NavBar } from "./NavBar";
import { UserProfile } from "./UserProfile";
import { Sidebar } from "./Sidebar"

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
        <Container style={{ marginTop: '7em' }}>
          <Grid>
            <Grid.Row>
              <Grid.Column width={2}>
                <Sidebar />
              </Grid.Column>
              <Grid.Column width={14}>
                <Container text>
                  <Route path="/" exact component={Home} />
                  <Route path="/profile" component={UserProfile} />
                </Container>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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