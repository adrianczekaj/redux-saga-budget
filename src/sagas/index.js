// import * as testSaga from "./testSaga";
import * as entriesSaga from "./entriesSage";

export const initSagas = (sagaMiddleware) => {
  // Object.values(testSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
  Object.values(entriesSaga).forEach(sagaMiddleware.run.bind(sagaMiddleware));
};
