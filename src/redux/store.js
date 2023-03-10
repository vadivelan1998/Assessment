
import {legacy_createStore,applyMiddleware,combineReducers} from "redux"

import thunk from "redux-thunk"
import { userReducer } from "./user/userReducer"
const rootreducer=combineReducers({
    user:userReducer
})


export const store=legacy_createStore(rootreducer, applyMiddleware(thunk) )
