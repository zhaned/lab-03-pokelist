import React, { Component } from 'react';
import PokeItem from './PokeItem.js';

//takes in a list of pokemon and renders a list of pokeitems
export default class PokeList extends Component {
  render() {
    const pokeListNodes = this.props.images.map((pokeItem) => (
      <PokeItem key={pokeItem.pokemon} imageItem={pokeItem} />
    ));
    return <ul>{pokeListNodes}</ul>;
  }
}
