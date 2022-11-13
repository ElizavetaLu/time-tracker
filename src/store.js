// import { createStore } from 'redux'
// import allreducers from './reducers'

// export const store = createStore(
//     allreducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )



import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import allreducers from './reducers'

const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducer = persistReducer(persistConfig, allreducers)

export let store = createStore(persistedReducer)
export let persistor = persistStore(store)
