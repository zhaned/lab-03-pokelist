import React, { Component } from 'react';
import PokeList from './PokeList';
import Searchbar from './Searchbar.js';
import './SearchPage.css';
import request from 'superagent';
import Spinner from './Spinner.js';

export default class SearchPage extends Component {
  state = {
    pokemon: [],
    sortOrder: '',
    sortBy: 'pokemon',
    filter: '',
    query: '',
    loading: false,
  };

  componentDidMount = async () => {
    await this.fetchPokemon();
  }

  fetchPokemon = async () => {
    this.setState({
      loading: true
    })

    const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&perPage=30`);

    console.log(data);
    setTimeout(() => {
      this.setState({
        loading: false,
        pokemon: data.body.results,
      })
    }, 5000)

  }

  handleClick = () => {
    // const filteredPokemon = Data.filter((pokemon) =>
    //   pokemon.pokemon.includes(this.state.query)
    // );
    // filteredPokemon.sort((a, b) =>
    //   a[this.state.sortBy].localeCompare(b[this.state.sortBy])
    // );
    this.fetchPokemon();

  };

  handleChangeSortBy = (e) => {
    this.setState({
      sortBy: e.target.value,
    });
  };

  handleInput = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  render() {
    return (
      
      <div class='sortTools'>
        <div class='searchTool'>
        <Searchbar
          sortBy={this.state.sortBy}
          handleChangeSortBy={this.handleChangeSortBy}
          handleInput={this.handleInput}
        />
        <button onClick={this.handleClick}>List Pokemon!</button>
        </div>
        {      
          this.state.loading
          ? <Spinner />:
          <PokeList images={this.state.pokemon} />
          }
      </div>
    );
  }
}
