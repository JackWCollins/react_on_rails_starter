import React from 'react'
import { Redirect } from 'react-router-dom';
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { authService } from './AuthService'

export class NavBar extends React.Component {

  state = {
    shouldRedirect: false
  };

  onLogoutClick = () => {
    authService.logout();
    this.setState({shouldRedirect: true});
  };

  render() {
    if (this.state.shouldRedirect) {
      return (
        <Redirect to="/login" />
      )
    } else {
      return (
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item as='a' header>
              <Image
                size='mini'
                src=''
                style={{ marginRight: '1.5em' }}
              />
              KO Pool
            </Menu.Item>

            <Dropdown item simple text='Dropdown'>
              <Dropdown.Menu>
                <Dropdown.Item>Profile</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Picks</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item onClick={this.onLogoutClick}>
              Logout
            </Menu.Item>
          </Container>
        </Menu>
      )
    }

  }
}
