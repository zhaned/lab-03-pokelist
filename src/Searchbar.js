import React, { Component } from 'react';
import Sort from './Sort';

export default class Searchbar extends Component {
  render() {
    return (
      <div>
        <Sort
          sortBy={this.props.sortBy}
          handleChangeSortBy={this.props.handleChangeSortBy}
        />
        <input onChange={this.props.handleInput} />
      </div>
    );
  }
}
