import React from 'react';

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return (
            <p key={image.id}>
                <img alt={image.description} src={image.urls.thumb} />
            </p>
        );
    });

    return (
        <div>
            {images}
        </div>
    );
}

export default ImageList;