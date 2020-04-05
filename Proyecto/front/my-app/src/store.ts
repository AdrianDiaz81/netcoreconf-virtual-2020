import { Store, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { state, StateReducer } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middlewares = [
    reduxThunk
  ];

export const store: Store<StateReducer> = createStore(
    state,  
    composeWithDevTools(applyMiddleware(...middlewares))
);