import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPhotos } from "../actions/photoActions";
import PhotoComponent from './PhotoComponent';
 
const PhotoListings = () => {
    const photos = useSelector((state)=>state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const response = await axios
        .get("https://jsonplaceholder.typicode.com/photos")
        .catch((err)=>{
            console.log("Error", err);
        });
        dispatch(setPhotos(response.data))
    };

    useEffect(()=>{
        fetchProducts();
    },[]);
    console.log(photos);

    return (
        <div>
            <h1>Photo Listings</h1>
            <PhotoComponent />
        </div>
    );
}
 
export default PhotoListings;