import React, { Component } from 'react';
import Data from './pokemon.js';
import PokeList from './PokeList';
import Searchbar from './Searchbar.js';
import './SearchPage.css';

export default class SearchPage extends Component {
  state = {
    pokemon: Data,
    sortOrder: '',
    sortBy: 'pokemon',
    filter: '',
    query: '',
  };

  handleClick = () => {
    const filteredPokemon = Data.filter((pokemon) =>
      pokemon.pokemon.includes(this.state.query)
    );
    filteredPokemon.sort((a, b) =>
      a[this.state.sortBy].localeCompare(b[this.state.sortBy])
    );

    this.setState({
      pokemon: filteredPokemon,
    });
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
        <PokeList images={this.state.pokemon} />
      </div>
    );
  }
}
