import NavExercise from '../components/NavExercise';
import bike from '../style/assets/icons/bike.svg';
import yoga from '../style/assets/icons/yoga.svg';
import swim from '../style/assets/icons/swim.svg';
import bodybuilding from '../style/assets/icons/bodybuilding.svg';

function Aside() {
  const exerciseArr = [
    {
      image: yoga,
      alt: 'méditation',
    },
    {
      image: swim,
      alt: 'natation',
    },
    {
      image: bike,
      alt: 'cycliste',
    },
    {
      image: bodybuilding,
      alt: 'musculation',
    },
  ];

  return (
      <aside className='aside'>
        <nav className='aside__nav'>
          {exerciseArr.map((item, index) => (
            <NavExercise key={index} image={item.image} alt={item.alt} />
          ))}
        </nav>
        <span className='aside__copyright'>Copyright, SportSee 2020</span>
      </aside>
  );
}

export default Aside;
