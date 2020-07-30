import createSagaMiddleware from 'redux-saga'

import { watchNews } from './news';

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;

export const runSagaMiddleware = ( ) => {
  sagaMiddleware.run(watchNews);
}