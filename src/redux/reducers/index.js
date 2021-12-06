import { combineReducers } from "redux";
import { photoReducer, selectedphotoReducer } from "./photoReducer";

const reducers = combineReducers({
    allPhotos: photoReducer,
    photo: selectedphotoReducer,
})

export default reducers;