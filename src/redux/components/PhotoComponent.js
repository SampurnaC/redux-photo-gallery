import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PhotoComponent = () => {
    const photos = useSelector((state)=>state.allPhotos.photos);

    const renderList = photos.map((photo) => {
        const {id, title} = photo;

        return(
            <div key={id}>
                <Link to={`/photo/${id}`}>
                    <p>{title}</p>
                </Link>
        </div>
        );
    });
    return <>{renderList}</>;
}
 
export default PhotoComponent;