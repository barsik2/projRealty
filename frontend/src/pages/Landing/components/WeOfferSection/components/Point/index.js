import './Point.scss';

const Point = ({ imgSrc, alt, description }) => {
  return (
    <div className="point">
      <img
        className="point__img"
        width="100"
        height="100"
        src={imgSrc}
        alt={alt}
      />
      <span className="point__description">{description}</span>
    </div>
  );
};

export default Point;
