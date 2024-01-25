import PropTypes from 'prop-types';

DisplayKeyData.propTypes = {
  item: PropTypes.object,
};

function DisplayKeyData({ item }) {
  const logoClassName = `keyData__logo ${item.style}`;

  return (
    <div className='keyData__card'>
      <div className={logoClassName}>
        <img
          className='keyData__img'
          src={item.logo}
          alt={`Logo de ${item.type}`}
        />
      </div>
      <div className='keyData__content'>
        <span className='keyData__value'>
          {item.value}
          {item.type === 'Calories' ? 'kCal' : 'g'}
        </span>
        <span className='keyData__type'>{item.type}</span>
      </div>
    </div>
  );
}

export default DisplayKeyData;
