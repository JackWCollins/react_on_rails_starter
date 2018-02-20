import React from 'react'
import { Header, Button, Card, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { NavBar } from "./NavBar";

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log("Props: ", props);
    // state.needsPick = false;
  }

  state = {
    needsPick: false
  }

  render() {
    if (this.state.needsPick) {
      return (
        <div>
          <Header as='h1'>Welcome to KO Pool 2018</Header>
          <div>
            <Button content="Make this week's pick" primary />
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Header as='h1'>Your picks this week</Header>

          <Card fluid>
            <Image src='' />
            <Card.Content>
              <Card.Header>
                Vikings
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Minnesota
                </span>
              </Card.Meta>
              <Card.Description>
                Sunday, October 14th, 12 PM - Mile-Hi Stadium in Denver, CO
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                35 picks this week
              </a>
            </Card.Content>
            <Card.Content extra className="won">
              Won
            </Card.Content>
          </Card>

          <Card fluid>
            <Image src='' />
            <Card.Content>
              <Card.Header>
                Cowboys
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Dallas
                </span>
              </Card.Meta>
              <Card.Description>
                Sunday, October 14th, 3 PM - Minnesota Stadium in Minneapolis, MN
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                12 picks this week
              </a>
            </Card.Content>
            <Card.Content extra className="lost">
              Knocked Out
            </Card.Content>
          </Card>

          <Card fluid>
            <Image src='' />
            <Card.Content>
              <Card.Header>
                Falcons
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Atlanta
                </span>
              </Card.Meta>
              <Card.Description>
                Sunday, October 14th, 3 PM - Raiders Stadium in Oakland, CA
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                25 picks this week
              </a>
            </Card.Content>
            <Card.Content extra className="pending">
              In Play
            </Card.Content>
          </Card>
        </div>
      )
    }

  }
}

export default Home

