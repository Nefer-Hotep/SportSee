import { NavLink } from 'react-router-dom';
import LogoSportSee from '../style/logo_sportsee.svg'

function Header() {
  return (
    <header className='header'>
      <div className='header__title'>
        <img
          className='header__img'
          src={LogoSportSee}
          alt='Logo SportSee'
        />
      </div>
      <nav className='nav'>
        <NavLink to='/' className='navLink'>
          Acceuil
        </NavLink>
        <NavLink to='/' className='navLink'>
          Profil
        </NavLink>
        <NavLink to='/' className='navLink'>
          Réglages
        </NavLink>
        <NavLink to='/' className='navLink'>
          Communauté
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
