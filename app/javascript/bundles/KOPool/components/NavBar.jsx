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
        <Redirect to="/" />
      )
    } else {
      return (
        <Menu fixed='top' inverted>
          <Container>
            <Menu.Item header>
              <Image
                size='mini'
                src=''
                style={{ marginRight: '1.5em' }}
              />
              <Link to="/">KO Pool</Link>
            </Menu.Item>

            <Menu.Item>
              <Link to="/profile" >Profile</Link>
            </Menu.Item>
            <Menu.Item onClick={this.onLogoutClick} position='right'>
              Logout
            </Menu.Item>
          </Container>
        </Menu>
      )
    }

  }
}
