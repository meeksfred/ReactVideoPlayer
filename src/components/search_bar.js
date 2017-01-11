import React, { Component } from 'react'; // { Component } is the same as const Component = React.Component ES6<

class SearchBar extends Component {
  render() {
    return <input onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;
