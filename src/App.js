import './index.css';
import Nav from "./nav.js";
import Main from "./main.js";
import About from "./about.js";
import ContactMe from './contactMe';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/contactMe" element={<ContactMe/>}/>
          </Routes>
      </Router>
      
  );
}

export default App;
