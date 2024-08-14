import './App.css';
import Header from "./Components/Header/Header";
import Red from "./Components/Red/Red";
import {Route, Routes} from "react-router-dom";
import Blue from "./Components/Blue/Blue";
import Green from "./Components/Green/Green";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/' element={<Red/>}/>
            <Route path='/blue/*' element={<Blue/>}/>
            <Route path='/green' element={<Green/>}/>
        </Routes>
        <footer>
            Footer
        </footer>
    </div>
  );
}

export default App;
