import React, { Component } from 'react';
//pokemon image, name, relevant data, other attributes
export default class PokeItem extends Component {
  render() {
    const {
      //image destructuring
      imageItem: { 
          url_image, 
          pokemon, 
          type_1, 
          ability_1, 
          shape 
        },
    } = this.props;

    return (
      <li className="item">
        <img alt={pokemon} src={url_image} />
        <p>Name: {pokemon.charAt(0).toUpperCase() + pokemon.slice(1)}</p>
        <p>Type: {type_1}</p>
        <p>Ability: {ability_1}</p>
        <p>Shape: {shape}</p>
      </li>

      // <li className='item'>
      //     <img alt={this.props.imageItem.title} src={this.props.imageItem.url} />
      //     <p>{this.props.imageItem.title}</p>
      //     <p>{this.props.imageItem.description}</p>
      //     <p>{this.props.imageItem.keyword}</p>
      //     <p>{this.props.imageItem.horns}</p>
      // </li>
    );
  }
}
