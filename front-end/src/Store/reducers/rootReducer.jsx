import videoReducer from './videoReducer'

import { combineReducers } from "redux";

export const rootReducer = combineReducers(
    {
        videoReducer
    }
);