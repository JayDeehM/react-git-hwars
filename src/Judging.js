import React, { Component } from 'react';

class Judging extends Component {

	render(){
		var isPlayer1Ready = !!Object.keys(this.props.player1).length;
		var isPlayer2Ready = !!Object.keys(this.props.player2).length;
		var playersReady = isPlayer1Ready && isPlayer2Ready
		console.log(playersReady)

		if (this.props.player1.followers > this.props.player1.followers) {
			<p>PLAYER 1 WINS!!!</p>
		} else if (this.props.player1.followers < this.props.player1.followers) {
			<p>PLAYER 2 WINS!!!</p>
		} else {
			<p>IT'S A DRAW!!!</p>
		}

		return (
			<div>
				{playersReady ? <p>PLAYERS ARE READY!!!</p> : null} 
			</div>
		)
	}
}

export default Judging;