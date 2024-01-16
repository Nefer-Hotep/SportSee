import { NavLink } from 'react-router-dom';
import LogoSportSee from '../style/assets/icons/logo_sportsee.svg';

function Header() {
  return (
    <header className='header'>
      <img className='header__img' src={LogoSportSee} alt='Logo SportSee' />
      <nav className='header__nav'>
        <NavLink to='/' className='header__navLink'>
          Accueil
        </NavLink>
        <NavLink to='/' className='header__navLink'>
          Profil
        </NavLink>
        <NavLink to='/' className='header__navLink'>
          Réglages
        </NavLink>
        <NavLink to='/' className='header__navLink'>
          Communauté
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
