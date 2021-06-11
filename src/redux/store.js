import { createStore, applyMiddleware } from 'redux';
import countriesReducer from './countries-reducer/countries.reducer';
import thunk from 'redux-thunk';

const store = createStore(countriesReducer,
    applyMiddleware(thunk))

export default store;