import React, { Component } from 'react';
import Box from './Box';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [{ width: 10, height: 40, color: 'orange' }]
    };
  }

  render() {
    const boxes = this.state.boxes.map((b) => (
      <Box height={b.height} width={b.width} color={b.color} />
    ));
    return (
      <>
        <h1>Color Box Maker Thingy</h1>
        {boxes}
      </>
    );
  }
}

export default BoxList;
