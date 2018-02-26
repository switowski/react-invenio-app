import React, { Component } from 'react';

import Badge from 'material-ui/Badge';
import Typography from 'material-ui/Typography';


const styles = {
  resultsCount: {
    padding: '0 15px'
  }
};

export default class Count extends Component {
  render() {
    return (
      <Badge color="primary" badgeContent={this.props.resultsCount}>
        <Typography style={styles.resultsCount}>Items found</Typography>
      </Badge>
    )
  }
}
