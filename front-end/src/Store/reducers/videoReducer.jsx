import { RECEIVE_VIDEOS, ADD_COMMENTS } from '../actions/actionTypes';

const initialState = {
    videos: [],
    comments: []
}

export default (state = initialState, action) => {

    let stateCopy = { ...state }

    switch (action.type) {
        case RECEIVE_VIDEOS:
            stateCopy.films = action.payload
            break
        case ADD_COMMENTS:
            stateCopy.comments = [...stateCopy.comments, action.payload]
            break
        default:
            break
    }
    return stateCopy;
};