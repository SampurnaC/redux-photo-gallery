import { ActionTypes } from "../contents/action-types";

const initialState = {
    photos: []
}
export const photoReducer = (state=initialState, {type, payload})=>{
    switch (type) {
        case ActionTypes.SET_PHOTOS:
            return {...state, photos: payload};
        default:
            return state;
    }
}

export const selectedphotoReducer = (state={},{type,payload})=>{
    switch (type) {
        case ActionTypes.SELECTED_PHOTO:
            return {...state, ...payload};
    
        default:
            return state;
    }
}