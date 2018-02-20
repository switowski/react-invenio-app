import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import searchReducer from './reducers/searchReducer';

export default combineReducers({
    routing: routerReducer,
    search: searchReducer
});
