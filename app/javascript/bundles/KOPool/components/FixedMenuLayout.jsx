import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const FixedMenuLayout = () => (
  <div>
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
        <Menu.Item>
          <Link to='/login'>Login</Link>
        </Menu.Item>
      </Container>
    </Menu>

    <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Welcome to KO Pool 2018</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>A text container is used for the main container, which is useful for single column layouts.</p>
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
)

export default FixedMenuLayout