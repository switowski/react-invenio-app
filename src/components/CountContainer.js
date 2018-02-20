import { connect } from 'react-redux'
import Count from './Count';

const mapStateToProps = state => ({
  resultsCount: state.search.results.length
})

export default connect(
  mapStateToProps
)(Count);
