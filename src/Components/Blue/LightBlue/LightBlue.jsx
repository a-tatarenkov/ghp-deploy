import './LightBlue.css';
import {Route, Routes} from "react-router-dom";

const LightBlue = () => {
    return (
        <div className='LightBlue'>
            LightBlue
            <hr/>
            <Routes>
                <Route path='/inner' element={<h1>Victory</h1>}/>
            </Routes>
        </div>
    )
}

export default LightBlue;