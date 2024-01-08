import PropTypes from 'prop-types';

NavExercise.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
};

function NavExercise({ image, alt }) {
  return (
    <div className='aside__logo'>
      <img className='aside__img' src={image} alt={`Logo de ${alt}`} />
    </div>
  );
}

export default NavExercise;
