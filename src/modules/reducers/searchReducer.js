import axios from 'axios';
export const API_REQUESTED = 'api/API_REQUESTED';
export const SEARCH = 'api/SEARCH';

const initialState = {
    count: 0,
    results: [],
    isFetching: false,
    isFetched: false
}

function getResults(results) {
    return results.data.hits.hits;
}

export default (state = initialState, action) => {
    switch (action.type) {
        case API_REQUESTED:
            return {
                ...state,
                isFetching: true
            }

        case `${SEARCH}_FULFILLED`:
            return {
                ...state,
                results: getResults(action.payload),
                isFetching: false,
                isFetched: true
            }
        default:
            return state
    }
}

export const search = (params) => {
    const URL = 'https://videos.cern.ch/api/records/';
    console.log(params);
    return dispatch => {
        dispatch({
            type: API_REQUESTED
        })
        dispatch({
            type: SEARCH,
            payload: axios.get(URL,
            {params: params})
        })
    }
}

