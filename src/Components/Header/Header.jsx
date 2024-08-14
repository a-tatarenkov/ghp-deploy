import './Header.css';
import logo from '../../assets/img/images.png';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header>
            <img src={logo} alt=""/>
            <NavLink to='/'>Red</NavLink>
            <NavLink to='/blue'>Blue</NavLink>
            <NavLink to='/green'>Green</NavLink>
        </header>
    )
}

export default Header;