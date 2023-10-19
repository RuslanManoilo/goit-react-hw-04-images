import { ItemModal } from "components/Modal/Modal";
import { Component } from "react";
import { GalleryItem, ItemImage } from "./ImageGalleryItem.styled";


class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false
    };

    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const { webformatURL, tags, largeImageURL } = this.props.image;
        const { isModalOpen } = this.state;
        
        return (
            <>
                <GalleryItem onClick={this.openModal}>
                    <ItemImage src={webformatURL} alt={tags}/>
                </GalleryItem>
            
                <ItemModal
                    largeImage={largeImageURL}
                    isModalOpen={isModalOpen}
                    closeModal={this.closeModal}
                />
            </>
        );
    };
};


export default ImageGalleryItem;