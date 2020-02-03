
import { RECEIVE_VIDEOS, ADD_COMMENTS } from "./actionTypes";

export const receiveVideos = (payload) => {
    return {
        type: RECEIVE_VIDEOS,
        payload
    };
};


export const addComments = (payload) => {
    return {
        type: ADD_COMMENTS,
        payload
    };
};
