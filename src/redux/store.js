import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from "redux-saga"
import { rootReducer } from "./reducer/reducer"
import rootSaga from "./saga/saga"

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = typeof window === 'object' &&
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose);

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

export const store = createStore(
    rootReducer,
    enhancer
)

sagaMiddleware.run(rootSaga)