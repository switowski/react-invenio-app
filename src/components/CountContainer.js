import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Count from './Count';
import { search } from '../modules/reducers/searchReducer';

const mapStateToProps = state => ({
  resultsCount: state.search.results.length
})

export default connect(
  mapStateToProps
)(Count);
