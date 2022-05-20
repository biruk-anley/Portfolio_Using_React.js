import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import './App.css';
import Navbar from './pages/Navabar';
import Home from './pages/Home'
import About from './pages/About'
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from './pages/Portfolio'
import Myservices from './pages/Myservices';
// here



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Myservices" element={<Myservices />} />
          <Route path="/Portfolio" element={<Portfolio/>} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Myservices" element={<Myservices />} />

         
        </Routes>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
