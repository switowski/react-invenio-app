import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Results from './Results';
import { search } from '../modules/reducers/searchReducer';

const mapStateToProps = state => ({
    results: state.search.results,
    isFetching: state.search.isFetching
})

const mapDispatchToProps = dispatch => bindActionCreators({
   search
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Results);
