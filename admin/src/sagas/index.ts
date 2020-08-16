import createSagaMiddleware from 'redux-saga'

import { watchOperationalData } from './operational-data';

const sagaMiddleware = createSagaMiddleware();

export default sagaMiddleware;

export const runSagaMiddleware = ( ) => {
  sagaMiddleware.run(watchOperationalData);
}