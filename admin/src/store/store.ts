import { applyMiddleware, createStore } from "redux";
import sagaMiddleware, { runSagaMiddleware } from "../sagas";
import { rootReducer } from './reducers/index';


export const store = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      sagaMiddleware
    )
  );

  runSagaMiddleware();

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;