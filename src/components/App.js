import React from 'react';
import SearchBar from './SearchBar';
import Number from './Number';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      trivia: null
    }
  }

  handleFormSubmit = response => {
    this.setState({trivia: response});
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onFormSubmit={this.handleFormSubmit} />
        <Number trivia={this.state.trivia} />
      </div>
    );
  }
}

export default App;
