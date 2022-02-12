import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [{ width: 10, height: 10, color: 'orange' }]
    };
  }

  updateBoxes = (box) => {
    this.setState({ boxes: [...this.state.boxes, box] });
  };

  render() {
    const boxes = this.state.boxes.map((b) => (
      <Box height={b.height} width={b.width} color={b.color} />
    ));
    return (
      <>
        <h1>Color Box Maker</h1>
        <BoxForm updateBoxes={this.updateBoxes} />
        {boxes}
      </>
    );
  }
}

export default BoxList;
