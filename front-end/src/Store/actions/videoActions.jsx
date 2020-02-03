
import { RECEIVE_FILMS, ADD_COMMENTS } from "./actionsTypes";

export const receiveFilms = (payload) => {
    return {
        type: RECEIVE_FILMS,
        payload
    };
};


export const addComments = (payload) => {
    return {
        type: ADD_COMMENTS,
        payload
    };
};
