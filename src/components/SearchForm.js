import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';

import SearchIcon from 'material-ui-icons/Search';

class SearchForm extends Component {

  render() {
    return (
      <TextField
        id="text-field-controlled"
        onChange={event => this.props.search({
          q: event.target.value
        })}
      />
    )
  }
}

export default SearchForm;
