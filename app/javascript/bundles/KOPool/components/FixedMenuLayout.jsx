import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { NavBar } from "./NavBar";

const FixedMenuLayout = () => (
  <div>
    <NavBar />

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