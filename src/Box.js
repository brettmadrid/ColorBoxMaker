import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    console.log('do something');
  }
  render() {
    return (
      <div>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color
          }}
        />
        <button onChange={this.handleChange}>Useless button for now</button>
      </div>
    );
  }
}

export default Box;
