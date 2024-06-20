import '../header/header.css'
import logo from '../../images/LOGO.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
            <div className='header'>
                <img src={logo} alt='Logo Kasa' className='logo' />
                <nav className='navigation'>
                <NavLink activeclassname="active" to="/">
                    <div className='nav-txt'>Accueil</div>
                </NavLink>
                <NavLink activeclassname="active" to="/about">
                <div className='nav-txt'>A Propos</div>
                </NavLink>
                </nav>
            </div>
    )
}

export default Header