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
                searchParams: {...state.searchParams, ...action.payload},
                isFetching: true
            }

        case `${SEARCH}_FULFILLED`:
            return {
                ...state,
                results: getResults(action.payload),
                total: action.payload.data.hits.total,
                isFetching: false,
                isFetched: true
            }
        default:
            return state
    }
}

export const search = (params={}) => {
    const URL = 'https://videos.cern.ch/api/records/';
    return (dispatch, getState) => {
        dispatch({
            type: API_REQUESTED,
            payload: params
        })
        console.log(getState())
        dispatch({
            type: SEARCH,
            payload: axios.get(URL,
            {params: getState().search.searchParams})
        })
    }
}

