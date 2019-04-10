import React, { Component } from 'react';
import { Box, Heading } from 'grommet';

export default class extends Component {
  render() {
    return (
      <Box pad="xsmall">
        <Heading>
          <strong>Hello, World</strong>
        </Heading>
      </Box>
    );
  }
}
