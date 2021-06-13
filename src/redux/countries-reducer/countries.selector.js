import { createSelector } from 'reselect';

const stateSelector = state => state;


export const selectCountries = createSelector(
    [stateSelector],
    state => state.countries
)

export const selectRegions = createSelector(
    [selectCountries],
    countries => [...new Set(countries.map(country => country['region']))]
);

export const selectDarkMode = createSelector(
    [stateSelector],
    state => state.darkMode
)

export const selectIsPendingState = createSelector(
    [stateSelector],
    state => state.isPending
)

export const selectSearchText = createSelector(
    [stateSelector],
    state => state.searchText
)

export const selectFilterOption = createSelector(
    [stateSelector],
    state => state.optionValue
)

export const selectCountriesOnSearchAndFilter = createSelector(
    [selectSearchText, selectFilterOption, selectCountries],
    (text, option, countries) => countries.filter(country => (country.name.toLowerCase().includes(text.toLowerCase())) && (country.region.toLowerCase() === option.toLowerCase()))
)

export const selectCountryDetails = (countryNameParam) => createSelector(
    [selectCountries],
    countries => {
        console.log('countries: ', countries)
        countries.find(country => {
            if (country.name === countryNameParam) {
                console.log(country)
            }
            console.log(countryNameParam)
            return country.name === countryNameParam
        })
    }
)


// Individual selectors for search and filter. These are not used because a combined selector is written above named selectCountriesOnSearchAndFilter
export const selectCountriesOnSearch = createSelector(
    [selectCountries, selectSearchText],
    (countries, searchText) => countries.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()))
)

export const selectCountriesOnFilter = createSelector(
    [selectCountries, selectFilterOption],
    (countries, optionValue) => countries.filter(country => country.region.toLowerCase() === optionValue.toLowerCase())
)