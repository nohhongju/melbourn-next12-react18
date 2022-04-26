import { createStore, applyMiddleware } from "redux"
import { createWrapper } from "next-redux-wrapper"
import createMiddleware from "redux-saga"
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "./reducers"
import rootSaga from "./sagas"

const sagaMiddleware = createMiddleware()

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
)
sagaMiddleware.run(rootSaga)
const makeStore = () => store

export const wrapper = createWrapper(makeStore)