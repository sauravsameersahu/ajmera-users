import createSagaMiddleware from "@redux-saga/core";
import { spawn } from "@redux-saga/core/effects";
import { watcherUserSaga } from "../user/userSaga";

const sagaMiddleware = createSagaMiddleware()
export default function* rootSaga() {
    yield spawn(watcherUserSaga)
    //add any other saga here 
}

export { sagaMiddleware, rootSaga }