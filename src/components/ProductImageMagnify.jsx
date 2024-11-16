import React, { useState } from 'react';
import { MEDIA_BASE_URL } from '../constants/URL';

const ProductDetail = ({data}) => {
  const [zoomStyle, setZoomStyle] = useState({
    backgroundPosition: '0% 0%',
    backgroundSize: 'initial',
  });
  const [showZoomMap, setShowZoomMap] = useState(false);

  const handleMouseEnter = () => {
    setShowZoomMap(true);
    setZoomStyle({
      ...zoomStyle,
      backgroundSize: '300%',
    });
  };

  const handleMouseMove = (e) => {
    const { top, left, width, height } = e.target.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    const xPercent = (offsetX / width) * 100;
    const yPercent = (offsetY / height) * 100;

    setZoomStyle({
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      backgroundSize: '400%',
    });
  };

  const handleMouseLeave = () => {
    setShowZoomMap(false);
    setZoomStyle({
      ...zoomStyle,
      backgroundSize: 'initial',
    });
  };

  return (
    <div className="product-main">
      <div className="detail-image-wrapper">
        <div className="detail-image-inner">
          <div className="detail-image shimmer-wrapper">
            <div className="hide-md mx-h-100">
              <div
                className="mx-h-100 zoomer-base-container arrow-hide"
                style={{ width: '420px', position: 'relative' }}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  draggable="false"
                  className="responsive-image preview-box"
                  src={MEDIA_BASE_URL+data[0]?.image}
                  // data-zoom="https://www.picnpick.com/uploads/product-1728131264-8.jpg"
                  alt="Super soft Leather shoes for Men's -PMS 105"
                  style={{
                    backgroundImage: `url("${MEDIA_BASE_URL+data[0]?.image}")`,
                    backgroundPosition: zoomStyle.backgroundPosition,
                    backgroundSize: zoomStyle.backgroundSize,
                  }}
                />
                {showZoomMap && (
                  <div
                    className="zoom-map"
                    style={{
                      position: 'absolute',
                      top: '0px',
                      right: '-100%',
                      width: '400px',
                      height: '400px',
                      border: '2px solid #000',
                      backgroundImage: `url("${MEDIA_BASE_URL+data[0]?.image}")`,
                      backgroundSize: '400%',
                      backgroundPosition: zoomStyle.backgroundPosition,
                      zIndex: 10,
                    }}
                  />
                )}
                <div
                  className="thumb-list"
                  style={{
                    height: '350px',
                    width: '70px',
                    gridTemplateRows:
                      'calc(100%/6/2) repeat(4, auto) calc(100%/6/2)',
                    visibility: 'visible',
                  }}
                >
                  {
                    data?.map(itm => (
                      <img
                        src={MEDIA_BASE_URL+itm?.image}
                        alt="move thumb icon"
                        className="zoomer-control responsive-image"
                      />
                    ))
                  }
                </div>
                <div
                  id="zoomer-pane-container"
                  className="pane-container"
                  style={{
                    width: '400px',
                    height: '478.333px',
                    left: '405px',
                    display: 'none',
                  }}
                ></div>
              </div>
            </div>
            <p className="mt__5 pb-15 text-center lh-30 hide-md">
              <span>Roll over image to zoom in</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
