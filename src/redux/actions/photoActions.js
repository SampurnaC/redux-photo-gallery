import { ActionTypes } from "../contents/action-types"

export const setPhotos=(photos)=>{
    return {
        type: ActionTypes.SET_PHOTOS,
        payload: photos
    }
}

export const selectedPhoto=(photo)=>{
    return{
        type: ActionTypes.SELECTED_PHOTO,
        payload: photo
    }
}