import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { ImgGallery } from "./ImageGallery.styled";

export const ImageGallery = ({images}) => {
    return (
        <ImgGallery>
            {images.map(item => (
                <ImageGalleryItem key={item.id} image={item} />
            ))}
        </ImgGallery>
    );
};