import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SearchForm from './SearchForm';
import { search } from '../modules/reducers/searchReducer';

const mapStateToProps = state => ({
    query: state.search.results
})

const mapDispatchToProps = dispatch => bindActionCreators({
    search
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchForm);
