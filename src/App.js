import React, { Component } from 'react';
import './App.css';
import PlayerProfile from './PlayerProfile.js';
import Judging from './Judging.js';
import { Row, Col, Button } from 'react-materialize';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      player1: [],
      player2: []
    }
  }

  lookupPlayer(player_num) {
    console.log(`FETCHING PLAYER ${player_num}`)
    
    if (player_num === 1) {
      var username = this.player1Input.value
    } else {
      var username = this.player2Input.value
    }
      
      fetch(`http://api.github.com/users/${username}`)
        .then(function(response) {
          return response.json()
        })
        .then((response) => {
          if (player_num === 1) {
            this.setState({ player1: response })
          } else {
            this.setState({ player2: response })
          }
        })
      
      .catch(function(error) {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <h1>Git HWars!</h1>
        <Judging player1={this.state.player1} player2={this.state.player2} />
          <Row>
            <Col s={12} m={5}>
              <input ref={(input) => { this.player1Input = input; }} />
              <Button waves='light' onClick={() => this.lookupPlayer(1)} >Look up</Button>
              <PlayerProfile player_data={this.state.player1} />
            </Col>
          <Col s={12} m={5}>
              <input ref={(input) => { this.player2Input = input; }} />
              <Button waves='light' onClick={() => this.lookupPlayer(2)} >Look up</Button>
              <PlayerProfile player_data={this.state.player2} />
            </Col>
          </Row>
      </div>
    );
  }
} 

export default App;
