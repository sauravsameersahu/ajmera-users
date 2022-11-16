import { GET_USER_ASYNC, POST_USER_ASYNC } from "./userTypes";

const initialState = {
    userData: null
}

export const userListDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_ASYNC: {
            const data = action.userListData
            return Object.assign({}, state, {
                userData: data
            })
        }
        case POST_USER_ASYNC: {
            const data = action.postResponse
            return Object.assign({}, state, {
                postUserResponse: data
            })
        }
        default:
            return state
    }
}