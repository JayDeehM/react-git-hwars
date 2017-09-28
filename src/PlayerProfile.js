import React, { Component } from 'react';
import { CardPanel } from 'react-materialize';

class PlayerProfile extends Component {

	render(){
		return (
			<CardPanel className="teal lighten-4 black-text">
				<h4>{this.props.player_data.name}</h4>	
				<img src={this.props.player_data.avatar_url} width='100%' height='100%' />
				<p>{this.props.player_data.bio}</p>	
				<p>{this.props.player_data.followers}</p>
				<p>{this.props.player_data.public_repos}</p>
			</CardPanel>
		)
	}
}

export default PlayerProfile;