import React from 'react'
import IconButton from 'material-ui/IconButton';
import { Field, reduxForm } from 'redux-form'
import TextField from 'material-ui/TextField'

import SearchIcon from 'material-ui-icons/Search';

// Nice Material-UI text field
const renderTextField = ({input, label, meta: {touched, error}, ...custom}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

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
