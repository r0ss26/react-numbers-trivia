import React from 'react';
import SearchInput from './SearchInput';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: ""
    };
  }

  handleSubmit = async () => {
    const response = await fetch(`http://numbersapi.com/${this.state.searchValue}`);
    const data = await response.text();
    this.props.onFormSubmit(data)
  }
  
  render() {
    return (
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <SearchInput 
              value={this.state.searchValue} 
              onSearchValueChange={newValue => {
                this.setState({searchValue: newValue})
              }}
              onEnter={this.handleSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
