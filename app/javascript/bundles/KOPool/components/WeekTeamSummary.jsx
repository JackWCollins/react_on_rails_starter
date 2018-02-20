import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export class WeekTeamSummary extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    picks: [
      {
        id: 'p1',
        team_name: 'Start Collins Me a Winner',
        user: {
          name: "Jack Collins",
          season: "1st season"
        }
      },
      {
        id: 'p2',
        team_name: 'My Cat Picked This Team',
        user: {
          name: "Jack Collins",
          season: "1st season"
        }
      },
      {
        id: 'p3',
        team_name: 'Eat it Brady',
        user: {
          name: "Jim Gaffigan",
          season: "3rd Season"
        }
      },
      {
        id: 'p4',
        team_name: 'Big Man on Campus',
        user: {
          name: "Adam Elkin",
          season: "4th Season"
        }
      }
    ]
  };

  render() {
    const picks = this.state.picks.map((pick) => (
      <List.Item key={pick.id}>
        <List.Content>
          <Grid>
            <Grid.Row>
              <Grid.Column width={12}>
                <List.Header>{pick.team_name}</List.Header>
                <List.Description className='matchup-details'>
                  {pick.user.name}
                </List.Description>
              </Grid.Column>
              <Grid.Column width={4} verticalAlign='middle'>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </List.Content>
      </List.Item>
    ));
    return (
      <Container>
        <Header>Picks for the Minnesota Vikings on Week 1</Header>
        <List verticalAlign='middle'>
          {picks}
        </List>
      </Container>
    )
  }
}
