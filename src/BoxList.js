import React, { Component } from 'react';
import Box from './Box';

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxList: []
    };
  }

  render() {
    return <Box height={10} width={20} color="purple" />;
  }
}

export default BoxList;
