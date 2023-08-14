import Carousel from 'react-bootstrap/Carousel';
import { slides } from './constants/OurWorkSectionConstants';

import ContentLayout from 'src/components/layouts/ContentLayout';

import './OurWorkSection.scss';

const OurWorkSection = () => {
  return (
    <div className="our_work" id='our_work'>
      <h2 className="our_work__title">Наши работы</h2>
      <Carousel 
        className="carousel"
        indicators={false}
        nextIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle
              opacity="0.5"
              cx="35"
              cy="35"
              r="34.5"
              fill="black"
              stroke="white"
            />
            <path
              opacity="0.5"
              d="M24 15.9474L57 35L24 54.0526L24 15.9474Z"
              fill="white"
              stroke="white"
            />
          </svg>
        }
        prevIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle
              opacity="0.5"
              cx="35"
              cy="35"
              r="34.5"
              fill="black"
              stroke="white"
            />
            <path
              opacity="0.5"
              d="M24 15.9474L57 35L24 54.0526L24 15.9474Z"
              fill="white"
              stroke="white"
            />
          </svg>
        }
      
      >
        {slides.map(slide =>
          <Carousel.Item key={slide.path}>
            <img src={slide.path} alt={slide.alternative} className='d-block w-200'/>
            <Carousel.Caption>
              <ContentLayout
              rootClassName="content__wrapper"
              className="content__wrapper_content"
              >
                <p className="content__wrapper_text">
                <span className="content__wrapper_text_square">
                  {slide.size}<sup>2</sup>
                </span>{' '}
                <span>
                  {slide.description}
                </span>
              </p>
              </ContentLayout>
            </Carousel.Caption>
          </Carousel.Item>
          )}
      {/* <Carousel.Item>
      <img src="/IMG_0253-min.jpg" alt="home1" className='d-block w-200' />
        <Carousel.Caption>
        <ContentLayout
              rootClassName="content__wrapper"
              className="content__wrapper_content"
            >
              <p className="content__wrapper_text">
                <span className="content__wrapper_text_square">
                  367м<sup>2</sup>
                </span>{' '}
                <span>
                  Модульный дом с трехгранным остеклением в современном стиле с
                  бассейном
                </span>
              </p>
            </ContentLayout>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/IMG_0241-min.jpg" alt="home1" className='d-block w-200' />
        <Carousel.Caption>
        <ContentLayout
              rootClassName="content__wrapper"
              className="content__wrapper_content"
            >
              <p className="content__wrapper_text">
                <span className="content__wrapper_text_square">
                  367м<sup>2</sup>
                </span>{' '}
                <span>
                  Модульный дом с трехгранным остеклением в современном стиле с
                  бассейном
                </span>
              </p>
            </ContentLayout>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/IMG_0266-min.jpg" alt="home1" className='d-block w-200' />
        <Carousel.Caption>
        <ContentLayout
              rootClassName="content__wrapper"
              className="content__wrapper_content"
            >
              <p className="content__wrapper_text">
                <span className="content__wrapper_text_square">
                  367м<sup>2</sup>
                </span>{' '}
                <span>
                  Модульный дом с трехгранным остеклением в современном стиле с
                  бассейном
                </span>
              </p>
            </ContentLayout>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/IMG_0287.jpg" alt="home1" className='d-block w-200' />
        <Carousel.Caption>
        <ContentLayout
              rootClassName="content__wrapper"
              className="content__wrapper_content"
            >
              <p className="content__wrapper_text">
                <span className="content__wrapper_text_square">
                  367м<sup>2</sup>
                </span>{' '}
                <span>
                  Модульный дом с трехгранным остеклением в современном стиле с
                  бассейном
                </span>
              </p>
            </ContentLayout>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/IMG_0239.jpg" alt="home1" className='d-block w-200' />
        <Carousel.Caption>
        <ContentLayout
              rootClassName="content__wrapper"
              className="content__wrapper_content"
            >
              <p className="content__wrapper_text">
                <span className="content__wrapper_text_square">
                  367м<sup>2</sup>
                </span>{' '}
                <span>
                  Модульный дом с трехгранным остеклением в современном стиле с
                  бассейном
                </span>
              </p>
            </ContentLayout>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>

      {/* <Carousel
        className="carousel"
        indicators={false}
        nextIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle
              opacity="0.5"
              cx="35"
              cy="35"
              r="34.5"
              fill="black"
              stroke="white"
            />
            <path
              opacity="0.5"
              d="M24 15.9474L57 35L24 54.0526L24 15.9474Z"
              fill="white"
              stroke="white"
            />
          </svg>
        }
        prevIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
            fill="none"
          >
            <circle
              opacity="0.5"
              cx="35"
              cy="35"
              r="34.5"
              fill="black"
              stroke="white"
            />
            <path
              opacity="0.5"
              d="M24 15.9474L57 35L24 54.0526L24 15.9474Z"
              fill="white"
              stroke="white"
            />
          </svg>
        }
      > */}
        {/* <Carousel.Item>
          <img src="/image-slider-one.png" alt="home1" className='d-block w-200' />
          <Carousel.Caption className="carousel__caption">
            <ContentLayout
              rootClassName="content__wrapper"
              className="content__wrapper_content"
            >
              <p className="content__wrapper_text">
                <span className="content__wrapper_text_square">
                  367м<sup>2</sup>
                </span>{' '}
                <span>
                  Модульный дом с трехгранным остеклением в современном стиле с
                  бассейном
                </span>
              </p>
            </ContentLayout>
          </Carousel.Caption>
        </Carousel.Item> */}
      {/* {/* </Carousel> */}
    </div>
    // }
  );
};

export default OurWorkSection;
