import React from "react";
import './OurWork.css';
import Carousel from 'react-bootstrap/Carousel';

const OurWork = () => {
  return (
    <div className="main_our_work">
        <h1 className="text_our_work">
            НАШИ РАБОТЫ
        </h1>

        <Carousel>
            <Carousel.Item>
                <img src="/image-slider-one.png" alt="home1" />
                <Carousel.Caption className="bg_txt">
                    <p className="txt_slider">
                        367м,
                        Модульный дом с трехгранным остеклением в современном стиле с бассейном
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/image-slider-one.png" alt="home1" />
                <Carousel.Caption className="bg_txt">
                    <p className="txt_slider">
                        367м,
                        Модульный дом с трехгранным остеклением в современном стиле с бассейном
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src="/image-slider-one.png" alt="home1" />
                <Carousel.Caption className="bg_txt">
                    <p className="txt_slider">
                        367м,
                        {/* <div className="line_vert"></div> */}
                        Модульный дом с трехгранным остеклением в современном стиле с бассейном
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    </div>
  );
};

export default OurWork;
