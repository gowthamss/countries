import { createStore, applyMiddleware } from 'redux';
import countriesReducer from './countries-reducer/countries.reducer';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

export const store = createStore(countriesReducer,
    applyMiddleware(thunk))

export const persistor = persistStore(store);

// export default store;