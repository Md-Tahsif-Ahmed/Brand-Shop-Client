import PropTypes from 'prop-types';

const Brand = ({ brand }) => {
  const { image, title } = brand;
  return (
    <div className="brand-card w-fit">
      <img
        src={image}
        alt={title}
        style={{ width: "400px", height: "250px" }}
      />
      <div className="brand-title text-center mt-0 italic font-bold text-lg text-white bg-gray-800">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

Brand.propTypes = {
  brand: PropTypes.any,
};

export default Brand;
