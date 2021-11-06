import { SET_POSTS, SET_POSTS_COMMENTS } from "./types";

const initialState = {
    posts: [],
    postComments: []
}

export const homerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.payload}

        case SET_POSTS_COMMENTS:
            return {...state, postComments: action.payload}
    
        default:
            return state;
    }
}