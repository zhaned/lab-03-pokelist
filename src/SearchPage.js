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
    currentPage: 1,
    total: 0,
  };

  componentDidMount = async () => {
    await this.fetchPokemon();
  };

  fetchPokemon = async () => {
    this.setState({
      loading: true,
    });

    const data = await request.get(
      `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=${this.state.sortBy}&page=${this.state.currentPage}&perPage=30`
    );

    setTimeout(() => {
      this.setState({
        loading: false,
        pokemon: data.body.results,
        total: data.body.count,
      });
    }, 500);
  };

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

  handlePrevious = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  handleNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const prevPage = prevState.currentPage;
    const newPage = this.state.currentPage;

    if (prevPage !== newPage) await this.fetchPokemon();
  };

  render() {
    const maxPage = Math.ceil(this.state.total / 30);

    return (
      <div class="sortTools">
        <div class="searchTool">
          <Searchbar
            sortBy={this.state.sortBy}
            handleChangeSortBy={this.handleChangeSortBy}
            handleInput={this.handleInput}
          />
          <button onClick={this.handleClick}>List Pokemon!</button>
          <button
            onClick={this.handlePrevious}
            disabled={this.state.currentPage === 1}
          >
            Previous
          </button>
          <button onClick={this.handleNext} disabled={maxPage === this.state.currentPage}>
            Next
          </button>
        </div>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <PokeList images={this.state.pokemon} />
        )}
      </div>
    );
  }
}
