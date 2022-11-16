import { put, takeEvery, call } from "redux-saga/effects"
import { apiCall, apiPostCall } from "../api/api"
import { GET_USER, GET_USER_ASYNC, POST_USER, POST_USER_ASYNC } from "./userTypes"


let usersUrl = 'https://reqres.in/api/users'

function* getUserSagaData() {
    const userData = yield call(apiCall, usersUrl)
    const userListData = userData?.data
    yield put({
        type: GET_USER_ASYNC, userListData
    })
}

function* postUserDetailsSagaData(action) {
    const userData = yield call(apiPostCall, usersUrl, action.params)
    const postResponse = userData?.data
    yield put({
        type: POST_USER_ASYNC, postResponse
    })
}

function* watcherUserSaga() {
    yield takeEvery(GET_USER, getUserSagaData)
    yield takeEvery(POST_USER, postUserDetailsSagaData)
}

export { watcherUserSaga }