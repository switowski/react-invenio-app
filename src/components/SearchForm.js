import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import * as _ from 'lodash';

import SearchIcon from 'material-ui-icons/Search';

class SearchForm extends Component {

  render() {
    return (
      <TextField
        id="text-field-controlled"
        onChange={(event) => {_.debounce(
          this.props.search({
            q: event.target.value
          }), 300)}}
      />
    )
  }
}

export default SearchForm;
