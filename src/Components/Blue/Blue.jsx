import './Blue.css';
import {NavLink, Route, Routes} from "react-router-dom";
import DarkBlue from "./DarkBlue/DarkBlue";
import LightBlue from "./LightBlue/LightBlue";

const Blue = () => {
    return (
        <div className='Blue'>
            <NavBar/>
            <div className='container'>
                <Routes>
                    <Route path='darkblue' element={<DarkBlue/>}/>
                    <Route path='lightblue/*' element={<LightBlue/>}/>
                </Routes>
            </div>
        </div>
    )
}

export default Blue;

const NavBar = () => {
    return (
        <nav>
            <NavLink to='/blue/darkblue'>Dark Blue</NavLink>
            <NavLink to='/blue/lightblue'>Light Blue</NavLink>
            <NavLink to='/blue/lightblue/inner'>inner route</NavLink>
        </nav>
    )
};