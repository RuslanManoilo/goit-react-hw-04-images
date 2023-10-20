import { useState } from "react";
import { ItemModal } from "components/Modal/Modal";
import { GalleryItem, ItemImage } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ image: { webformatURL, tags, largeImageURL } }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <GalleryItem onClick={openModal}>
                <ItemImage src={webformatURL} alt={tags} />
            </GalleryItem>
            
            <ItemModal
                largeImage={largeImageURL}
                isModalOpen={isModalOpen}
                closeModal={closeModal}
            />
        </>
    );
};