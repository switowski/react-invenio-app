import React, { Component } from 'react'
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import * as _ from 'lodash';

import SearchIcon from 'material-ui-icons/Search';

class SearchForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      value: 'Property Value',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <TextField
          id="text-field-controlled"
          onChange={this.handleChange}
        />
        <SearchIcon onClick={() => {this.props.search({
          q: this.state.value
        })}}/>
      </div>
    )
  }
}

export default SearchForm;
