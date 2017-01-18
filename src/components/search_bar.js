import React, { Component } from 'react'; // { Component } is the same as const Component = React.Component ES6<

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'Start' }; // only place this syntax will appear, my guess is
    // because this is where we initialized state for the component.
  }

  render() {
    // to change the state anywhere else, we use this.setState.
    return (
      <div>
        <input
          value={this.state.term} // before, the value attribute on input wasn't actually changing or being set by the onChange event.
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;
