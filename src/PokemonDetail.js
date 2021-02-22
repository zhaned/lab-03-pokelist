import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './Spinner.js';

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
        Currently the detail page
        {
          this.state.loading 
            ? <Spinner />
            : <div>
                <img src={this.state.pokemon.url_image} alt="pokemon" />
                <p>{this.state.pokemon.pokemon}</p>
                <p>{this.state.pokemon.attack}</p>
                <p>{this.state.pokemon.defense}</p>
                <p>{this.state.pokemon.type_1}</p>
                <p>{this.state.pokemon.type_2}</p>
                <p>{this.state.pokemon.shape}</p>
                <p>{this.state.pokemon.ability_1}</p>
                <p>{this.state.pokemon.ability_2}</p>
            </div>
        }
      </div>
    )
  }
}
