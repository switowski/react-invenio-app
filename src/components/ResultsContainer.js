import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Results from './Results';
import { search } from '../modules/reducers/searchReducer';

const mapStateToProps = state => ({
    results: state.search.results
})

const mapDispatchToProps = dispatch => bindActionCreators({
   search
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results);
