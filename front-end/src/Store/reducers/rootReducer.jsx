import count from "./count";
import filmReducer from './filmsReducer'

import { combineReducers } from "redux";

export default combineReducers(
    {
        counterState: count,
        filmState: filmReducer
    }
);