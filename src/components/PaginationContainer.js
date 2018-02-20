import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Pagination from './Pagination';
import { search } from '../modules/reducers/searchReducer';

const mapStateToProps = state => ({
  pageCount: state.search.total / 10
})

const mapDispatchToProps = dispatch => bindActionCreators({
  search
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
