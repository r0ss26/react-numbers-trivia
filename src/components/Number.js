import React from 'react';

class Number extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>{this.props.trivia}</div>;
  }
}

export default Number;
