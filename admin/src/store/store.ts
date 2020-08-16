import { routerMiddleware } from "react-router-redux";
import { applyMiddleware, createStore } from "redux";
import sagaMiddleware, { runSagaMiddleware } from "../sagas";
import { rootReducer } from './reducers/index';
import { history } from '../App';

import { composeWithDevTools } from 'redux-devtools-extension';

 /* eslint-disable no-underscore-dangle */
 
const composeEnhancers = composeWithDevTools({});
export const store = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware( history )
      )
    )
  );

  runSagaMiddleware();

  return store;
}
/* eslint-enable */

export type RootState = ReturnType<typeof rootReducer>;