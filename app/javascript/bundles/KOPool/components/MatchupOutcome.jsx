import React from 'react'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MatchupOutcome = function(props) {
  let outcomeText = '';
  let outcomeIcon = '';
  let classes = '';

  if (props.outcome === 'won') {
    outcomeText = 'Won';
    outcomeIcon = 'check';
    classes = 'picked-team-result won'
  } else if (props.outcome === 'lost') {
    outcomeText = "KO'd";
    outcomeIcon = 'close';
    classes = 'picked-team-result lost'
  } else {
    outcomeText = "In play";
    outcomeIcon = 'time';
    classes = 'picked-team-result pending'
  }

  return (
    <div className={classes}>
      <Icon name={outcomeIcon} size='large'></Icon>
      <span>{outcomeText}</span>
    </div>
  )
}

export default MatchupOutcome
