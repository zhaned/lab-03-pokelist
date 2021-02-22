import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner.js';
import './PokemonDetails.css';


export default class PokemonDetail extends Component {
  state = {
    pokemon: {}
  }

  componentDidMount = async () => {
    this.setState({
      loading: true
    })

    const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/${this.props.match.params.id}`);
    this.setState({
      loading: false,
      pokemon: data.body
    })

  }

  render() {
    return (
      
      <div>
        <h1 class='detailHead'>Details Page</h1>
        	<div class='details'>
            {
              this.state.loading
                ? <Spinner />
                : <div class='detailItem'>
                    <img src={this.state.pokemon.url_image} alt="pokemon" />
                    <p>Name: {this.state.pokemon.pokemon}</p>
                    <p>Attack: {this.state.pokemon.attack}</p>
                    <p>Defense: {this.state.pokemon.defense}</p>
                    <p>Type: {this.state.pokemon.type_1} / {this.state.pokemon.type_2}</p>
                    <p>{this.state.pokemon.shape}</p>
                    <p>Abilities: {this.state.pokemon.ability_1} / {this.state.pokemon.ability_2}</p>
                </div>
            }
          </div>
      </div>
    )
  }
}
