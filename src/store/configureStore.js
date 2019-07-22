import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware()
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware))
  return {
    ...createStore(rootReducer, {}, enhancer),
    runSaga: sagaMiddleware.run,
  }
}
