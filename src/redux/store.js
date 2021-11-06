import { createStore, applyMiddleware, combineReducers  } from "redux";
import { userReducer } from "./userReducer";
import thunk from 'redux-thunk'
import { homerReducer } from "./homeReducer";

const rootReducer = combineReducers({
    user: userReducer,
    posts: homerReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk));