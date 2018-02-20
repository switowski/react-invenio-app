import React from 'react'
import IconButton from 'material-ui/IconButton';
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'

import SearchIcon from 'material-ui-icons/Search';

let SearchForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <TextField name="searchTerm" floatingLabelText="Search CDS" />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
    </form>
  )
}

SearchForm = reduxForm({
  // a unique name for the form
  form: 'search'
})(SearchForm)

export default SearchForm
