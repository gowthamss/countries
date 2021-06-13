import { TOGGLE_DARK_MODE, COUNTRIES_REQUEST_PENDING, COUNTRIES_REQUEST_SUCCESS, COUNTRIES_REQUEST_FAILED, SEARCH_COUNTRIES, FILTER_COUNTRIES, EMPTY_SEARCH_FIELD } from './countries.types';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const initialState = {
    countries: [],
    isPending: false,
    error: '',
    darkMode: false,
    searchText: '',
    optionValue: ''
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
        case SEARCH_COUNTRIES:
            return {
                ...state,
                searchText: action.payload
            }
        case FILTER_COUNTRIES:
            return {
                ...state,
                optionValue: action.payload
            }
        case EMPTY_SEARCH_FIELD:
            return {
                ...state,
                searchText: ''
            }
        default:
            return state;
    }
}

export default persistReducer(persistConfig, countriesReducer);