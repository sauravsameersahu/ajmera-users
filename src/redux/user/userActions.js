import { GET_USER, POST_USER } from "./userTypes";

export const getUserList = () => {
    return {
        type: GET_USER
    }
}

export const postUserDetails = (params) => {
    return {
        type: POST_USER,
        params
    }
}
