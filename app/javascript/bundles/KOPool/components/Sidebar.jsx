import React from 'react'
import { Redirect } from 'react-router-dom';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { authService } from './AuthService'

export class Sidebar extends React.Component {

  render() {
    return (
      <Container>
        <List selection verticalAlign='middle'>
          <List.Item>
            <List.Content>
              <List.Header><Link to="/">Your Picks</Link></List.Header>
            </List.Content>
          </List.Item>
          <List.Item>
            <List.Content>
              <List.Header><Link to="/week_summary">Week Summary</Link></List.Header>
            </List.Content>
          </List.Item>
        </List>
      </Container>
    )
  }
}

