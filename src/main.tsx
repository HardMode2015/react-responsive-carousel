import React from 'react';
import ReactDOM from 'react-dom';

import(/* webpackChunkName: "carousel-component" */ './components/Carousel').then(({ default: Carousel }) => {
    const DemoCarousel = () => (
        <Carousel
            showArrows
            infiniteLoop
            autoPlay
            emulateTouch
            onClickItem={(...args) => console.log('onClickItem', ...args)}
            onChange={(...args) => console.log('onChange', ...args)}
            onClickThumb={(...args) => console.log('onClickThumb', ...args)}
        >
            <div>
                <img src="https://realstate.test/storage/properties/test2/3475035-e6787o.webp" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://realstate.test/storage/properties/test2/3475035-e6787o.webp" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://realstate.test/storage/properties/test2/3475035-e6787o.webp" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src="https://realstate.test/storage/properties/test2/3475035-e6787o.webp" />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img src="https://realstate.test/storage/properties/test2/3475035-e6787o.webp" />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img src="https://realstate.test/storage/properties/test2/3475035-e6787o.webp" />
                <p className="legend">Legend 6</p>
            </div>
        </Carousel>
    );
    ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
});
