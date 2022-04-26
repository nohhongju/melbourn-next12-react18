import * as T from "../types"

export const addUser = (user) => {
    return {
        type: T.USER_ADD_REQUESTED,
        payload: user
    }
}
export const fetchUsers = () => {
    return {
        type: T.USER_FETCH_REQUESTED,
    }
}
export const updateUser = (user) => {
    return {
        type: T.USER_UPDATE_REQUESTED,
        payload: user
    }
}
export const delUser = (userid) => {
    return {
        type: T.USER_DELETE_REQUESTED,
        payload: userid
    }
}