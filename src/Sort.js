import React, { Component } from 'react';

export default class Sort extends Component {
  render() {
    return (
      <div>
        Sort:
        <select
          onChange={this.props.handleChangeSortBy}
          value={this.props.sortBy}
        >
          <option value="pokemon">Name</option>
          <option value="shape">Shape</option>
          <option value="type_1">Type</option>
          <option value="ability_1">Ability</option>
        </select>
      </div>
    );
  }
}
