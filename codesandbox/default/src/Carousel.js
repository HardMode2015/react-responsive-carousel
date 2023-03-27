import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const images = [
    'https://realstate.test/storage/properties/test2/3475035-e6787o.webp',
    'https://realstate.test/storage/properties/test2/3475035-e6787o.webp',
    'https://realstate.test/storage/properties/test2/3475035-e6787o.webp',
    'https://realstate.test/storage/properties/test2/3475035-e6787o.webp',
    'https://realstate.test/storage/properties/test2/3475035-e6787o.webp',
    'https://realstate.test/storage/properties/test2/3475035-e6787o.webp',
    'https://realstate.test/storage/properties/test2/3475035-e6787o.webp',
]

export default () => (
    <Carousel autoPlay>
        {images.length ? images.map((image, i) => (
            <div key={i}>
            <img alt="" src={image} />
            <p className="legend">Legend 1</p>
        </div>
        )): null}
    </Carousel>
);
