import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import createSagaMiddleware from 'redux-saga'; // Use 'redux-saga'
import rootSaga from './saga/rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Configure the store with the saga middleware

const store = configureStore({
  reducer: rootReducer,
  
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // Optional: Disable serializableCheck if using non-serializable values
    }).concat(sagaMiddleware),
});

// Run the root saga
sagaMiddleware.run(rootSaga);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
