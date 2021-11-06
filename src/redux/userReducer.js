import { SET_USERS, SET_USER } from "./types";

const initialState = {
    users: [],
    user: {}
}

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_USERS:
            return {...state, users: payload}

        case SET_USER:
            return {...state, user: payload}
    
        default:
            return state;
    }
}