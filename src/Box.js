import React, { Component } from 'react';

class Box extends Component {
  constructor(props) {
    super(props);

    this.deleteBox = this.deleteBox.bind(this);
  }

  deleteBox() {
    console.log(this.props);
    this.props.remove(this.props.id);
  }
  render() {
    return (
      <div
        className='Box-container'
        style={{ display: 'flex', flexDirection: 'column', margin: '10px' }}>
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.color,
          }}
        />
        <button
          onClick={this.deleteBox}
          style={{ width: `${this.props.width}em` }}>
          Delete Box
        </button>
      </div>
    );
  }
}

export default Box;
