import { TOGGLE_DARK_MODE, COUNTRIES_REQUEST_PENDING, COUNTRIES_REQUEST_SUCCESS, COUNTRIES_REQUEST_FAILED } from './countries.types';

const initialState = {
    countries: [],
    isPending: false,
    error: '',
    darkMode: false
}

const countriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return {
                ...state,
                darkMode: !state.darkMode
            }
        case COUNTRIES_REQUEST_PENDING:
            return {
                ...state,
                isPending: true
            }
        case COUNTRIES_REQUEST_SUCCESS:
            return {
                ...state,
                countries: action.payload,
                isPending: false
            }
        case COUNTRIES_REQUEST_FAILED:
            return {
                ...state,
                error: action.payload,
                isPending: false
            }
        default:
            return state;
    }
}

export default countriesReducer;