import React, { Component } from 'react';

/*
// Refactor into es6
class SearchBar extends Component {
  render() {
    return (
      <input onChange={this.onInputChange} />
    );
  }

  onInputChange(event) {
    console.log(event.target.value);
  }
}
*/

// refactor: Also with only one single argument (event) you can remove the parenthesis
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  
  render() {
    return (
      // <input onChange={event => console.log(event.target.value)} />
      <div className='search-bar'>
      <input
        value={this.state.term}
        // onChange={event => this.setState({ term: event.target.value })}
        onChange={event => this.onInputChange(event.target.value)} 
      />
      {/* Value of the input: {this.state.term} */}
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;