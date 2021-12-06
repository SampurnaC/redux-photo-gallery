import { useParams } from "react-router";

import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { selectedPhoto } from "../actions/photoActions";

const PhotoDetail = () => {
    const product = useSelector((state)=>state.photo)
    const {id, title} = product;
    const params = useParams();
    const photoId = params.id;
    const dispatch = useDispatch();
    console.log(photoId);


    const fetchPhotoDetail = async()=> {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
        .catch((err)=>{
            console.log("Error", err);
        })
        dispatch(selectedPhoto(response.data));
    }

    useEffect(()=>{
        if (photoId && photoId !== "") fetchPhotoDetail();
    },[photoId])
    return (
        <div>
            <h1>Photo Detail</h1>
            <p>{title}</p>
        </div>
    );
}
 
export default PhotoDetail;