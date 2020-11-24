import React from 'react';
import Gallery from 'react-photo-gallery';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return {
            src : image.urls.regular,
            width : 4,
            height : 3
        }
    });

    return (
        <div>
            <Gallery photos={images} />
        </div>
    );
}

export default ImageList;