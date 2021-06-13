import {
    TOGGLE_DARK_MODE,
    COUNTRIES_REQUEST_PENDING,
    COUNTRIES_REQUEST_SUCCESS,
    COUNTRIES_REQUEST_FAILED,
    SEARCH_COUNTRIES,
    FILTER_COUNTRIES,
    EMPTY_SEARCH_FIELD
} from "./countries.types";

export const toggleDarkMode = () => ({
    type: TOGGLE_DARK_MODE,
});

export const fetchCountries = () => (dispatch) => {
    dispatch({ type: COUNTRIES_REQUEST_PENDING });
    fetch("https://restcountries.eu/rest/v2/all")
        .then((res) => res.json())
        .then((countries) => {
            dispatch({ type: COUNTRIES_REQUEST_SUCCESS, payload: countries });
        })
        .catch((error) =>
            dispatch({ type: COUNTRIES_REQUEST_FAILED, payload: error })
        );
};

export const setSearchField = (searchtext) => ({
    type: SEARCH_COUNTRIES,
    payload: searchtext,
});

export const setFilterOption = (option) => ({
    type: FILTER_COUNTRIES,
    payload: option,
});

export const emptySearchField = () => ({
    type: EMPTY_SEARCH_FIELD
})