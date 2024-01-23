import {combineReducers, configureStore} from '@reduxjs/toolkit'
import dataReducer from './dataReducer'
import { persistStore, persistReducer,
         FLUSH,
         REHYDRATE,
         PAUSE,
         PERSIST,
         PURGE,
         REGISTER } from 'redux-persist'
import localStorage  from 'redux-persist/lib/storage'

/**
 * Configuration of Redux Persist
 */
const persistConfig = {
    key: 'root',
    storage: localStorage,
}
/**
 * Creation of reducers
 */
const rootReducer = combineReducers ({
    data : dataReducer,
  })

const persistedReducer = persistReducer(persistConfig, rootReducer)

/**
 * Store configuration
 */
export const store = configureStore({
    reducer : persistedReducer ,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)
