import './index.css';
import Nav from "./nav.js";
import Main from "./main.js";
import About from "./about.js";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
      </Router>
      
  );
}

export default App;
