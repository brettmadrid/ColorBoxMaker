import React, { Component } from 'react';
import Box from './Box';
import BoxForm from './BoxForm';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [],
    };
  }

  updateBoxes = box => {
    this.setState({ boxes: [...this.state.boxes, box] });
  };

  remove = id => {
    const removed = this.state.boxes.filter(b => b.id != id);
    this.setState({ boxes: removed });
  };

  render() {
    const boxes = this.state.boxes.map(b => (
      <Box
        key={b.id}
        id={b.id}
        height={b.height}
        width={b.width}
        color={b.color}
        remove={this.remove}
      />
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
