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