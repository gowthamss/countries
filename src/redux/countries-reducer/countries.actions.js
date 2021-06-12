import {
    TOGGLE_DARK_MODE,
    COUNTRIES_REQUEST_PENDING,
    COUNTRIES_REQUEST_SUCCESS,
    COUNTRIES_REQUEST_FAILED,
    SEARCH_COUNTRIES
} from './countries.types';

export const toggleDarkMode = () => ({
    type: TOGGLE_DARK_MODE
})

export const fetchCountries = () => dispatch => {
    dispatch({ type: COUNTRIES_REQUEST_PENDING })
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(countries => {
            console.log('countries: ', countries.slice(0, 4))
            dispatch({ type: COUNTRIES_REQUEST_SUCCESS, payload: countries })
        })
        .catch(error => dispatch({ type: COUNTRIES_REQUEST_FAILED, payload: error }))
}

export const setSearchField = (searchtext) => ({
    type: SEARCH_COUNTRIES,
    payload: searchtext
})